import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Order } from "../models/Order";
import { Product, ProductSubDoc } from "../models/Product";

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { orderItems } = req.body;
  if (orderItems.length <= 0) throw new BadRequestError("No items in cart");

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

  res.send(order);
});

export const getOrder = asyncHandler(async (req: Request, res: Response) => {});
