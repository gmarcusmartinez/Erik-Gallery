import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Product, ProductType } from "../models/Product";

export const getPrints = asyncHandler(async (req: Request, res: any) => {
  res.status(200).json(res.advancedResults);
});

export const adminGetPrints = asyncHandler(async (req: Request, res: any) => {
  const prints = await Product.find({ type: ProductType.Print });
  res.send(prints);
});

export const getPrint = asyncHandler(async (req: Request, res: any) => {
  const print = await Product.findById(req.params.id);
  if (!print) throw new BadRequestError("Print not found.");
  res.status(200).json(print);
});

export const createPrint = asyncHandler(async (req: Request, res: Response) => {
  const print = Product.build({ ...req.body, type: ProductType.Print });
  print.vatPrice = print.calculateVat();
  print.netPrice = print.calculateNet();

  await print.save();
  res.status(200).json(print);
});

export const updatePrint = asyncHandler(async (req: Request, res: Response) => {
  const opts = { new: true, runValidators: true };
  const print = await Product.findByIdAndUpdate(req.params.id, req.body, opts);
  if (!print) throw new BadRequestError("Print Not Found.");

  print.vatPrice = print.calculateVat();
  print.netPrice = print.calculateNet();
  await print.save();

  res.status(200).json(print);
});

export const deletePrint = asyncHandler(async (req: Request, res: Response) => {
  const print = await Product.findById(req.params.id);
  if (!print) throw new BadRequestError("Print not found.");
  print.remove();
  res.status(200).json(print);
});
