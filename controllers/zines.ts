import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Product, ProductType } from "../models/Product";

export const getZines = asyncHandler(async (req: Request, res: any) => {
  res.status(200).json(res.advancedResults);
});

export const getZine = asyncHandler(async (req: Request, res: any) => {
  const zine = await Product.findById(req.params.id);
  if (!zine) throw new BadRequestError("Zine not found.");
  res.status(200).json(zine);
});

export const createZine = asyncHandler(async (req: Request, res: Response) => {
  const zine = Product.build({ ...req.body, type: ProductType.Zine });
  await zine.save();
  res.status(200).json(zine);
});

export const updateZine = asyncHandler(async (req: Request, res: Response) => {
  let zine = await Product.findById(req.params.id);
  if (!zine) throw new BadRequestError("Zine Not Found.");

  const opts = { new: true, runValidators: true };
  zine = await Product.findByIdAndUpdate(req.params.id, req.body, opts);
  res.status(200).json(zine);
});

export const addZineImage = asyncHandler(
  async (req: Request, res: Response) => {
    let zine = await Product.findById(req.params.id);
    if (!zine) throw new BadRequestError("Zine Not Found.");

    const image = req.body.image;
    zine.images.push(image);
    await zine.save();

    res.status(200).json(zine);
  }
);

export const deleteZine = asyncHandler(async (req: Request, res: Response) => {
  const zine = await Product.findById(req.params.id);
  zine?.remove();
  res.status(200).json(zine);
});
