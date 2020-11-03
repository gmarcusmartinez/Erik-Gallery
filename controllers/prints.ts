import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Print } from "../models/Print";

export const getAll = asyncHandler(async (req: Request, res: any) => {
  res.status(200).json(res.advancedResults);
});

export const get = asyncHandler(async (req: Request, res: any) => {
  const print = await Print.findById(req.params.id);
  if (!print) throw new BadRequestError("Print not found.");
  res.status(200).json(print);
});

export const create = asyncHandler(async (req: Request, res: Response) => {
  const { description, image, size, price, inStock } = req.body;
  const print = Print.build({ description, image, size, price, inStock });
  await print.save();
  res.status(200).json(print);
});

export const update = asyncHandler(async (req: Request, res: Response) => {
  let print = await Print.findById(req.params.id);
  if (!print) throw new BadRequestError("Print Not Found.");

  const opts = { new: true, runValidators: true };
  print = await Print.findByIdAndUpdate(req.params.id, req.body, opts);
  res.status(200).json(print);
});

export const remove = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const print = await Print.findById(id);
  print?.remove();
  res.status(200).json(print);
});
