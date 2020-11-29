import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

export const createCart = asyncHandler(async (req: Request, res: Response) => {
  let cart;

  if (!req.session?.cartId) {
    cart = await Cart.build({ items: [] });
    req.session!.cartId = cart.id;
    await cart.save();
  } else {
    cart = await Cart.findById(req.session.cartId);
  }

  const product = await Product.findById(req.body.productId);
  if (!product) throw new BadRequestError("Product Not Found.");
  if (product.quantityInStock <= 0)
    throw new BadRequestError("Product Sold Out.");

  product.quantityInStock--;
  await product.save();

  const productSubDoc = product.createSubDoc();
  const existingItem = cart!.items.find((i) => i._id === req.body.productId);

  if (existingItem) existingItem.quantity++;
  else {
    productSubDoc.quantity = 1;
    cart!.items.push(productSubDoc);
  }

  await cart!.save();
  res.send({ cart });
});

export const getCart = asyncHandler(async (req: Request, res: Response) => {
  if (!req.session?.cartId) return res.send({ msg: "Cart Empty" });
  const cart = await Cart.findById(req.session.cartId);
  res.send(cart);
});
