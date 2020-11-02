import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async";
import { Print } from "../models/Print";

export const getPrints = asyncHandler(async (req: Request, res: Response) => {
  const prints = await Print.find({});
  res.status(200).json(prints);
});

export const createPrint = asyncHandler(async (req: Request, res: Response) => {
  const { description, image, size, price, inStock } = req.body;
  const print = Print.build({ description, image, size, price, inStock });
  await print.save();
  res.status(200).json(print);
});

export const deletePrint = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const print = await Print.findById(id);
  print?.remove();

  res.status(200).json(print);
});
