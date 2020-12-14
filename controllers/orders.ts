import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Order } from "../models/Order";
import { Product, ProductSubDoc } from "../models/Product";

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { orderItems } = req.body;
  if (orderItems && orderItems.length <= 0)
    throw new BadRequestError("No items in cart");

  const orderItemIds: string[] = [];
  orderItems.forEach((item: ProductSubDoc) => orderItemIds.push(item._id));

  const products = await Product.find({
    _id: { $in: orderItemIds },
    quantityInStock: { $gt: 0 },
  });

  const soldOutmsg = "One or more products in your cart has recently sold out.";
  if (products.length !== orderItems.length)
    throw new BadRequestError(soldOutmsg);

  // await products.forEach((product) => {
  //   const qty = orderItems.find(
  //     (o: ProductSubDoc) => o._id === product._id.toString()
  //   ).quantity;

  //   product.quantityInStock -= qty;
  //   product.save();
  // });

  const order = Order.build(req.body);
  await order.save();
  res.send(order);
});

export const adminGetOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const orders = await Order.find();
    res.send(orders);
  }
);

export const getOrder = asyncHandler(async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id);
  res.send(order);
});

export const updateOrderToPaid = asyncHandler(
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id);
    if (!order) throw new BadRequestError("Order not found");

    order.isPaid = true;
    order.paidAt = new Date(Date.now());
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    await order.save();
    res.send(order);
  }
);
