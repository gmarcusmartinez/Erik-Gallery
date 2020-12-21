import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Product, ProductType } from "../models/Product";

export const getZines = asyncHandler(async (req: Request, res: any) => {
  res.status(200).json(res.advancedResults);
});

export const adminGetZines = asyncHandler(async (req: Request, res: any) => {
  const zines = await Product.find({ type: ProductType.Zine });
  res.send(zines);
});

export const getZine = asyncHandler(async (req: Request, res: any) => {
  const zine = await Product.findById(req.params.id);
  if (!zine) throw new BadRequestError("Zine not found.");
  res.status(200).json(zine);
});

export const createZine = asyncHandler(async (req: Request, res: Response) => {
  const zine = Product.build({ ...req.body, type: ProductType.Zine });
  zine.vatPrice = zine.calculateVat();
  zine.netPrice = zine.calculateNet();

  await zine.save();
  res.status(200).json(zine);
});

export const updateZine = asyncHandler(async (req: Request, res: Response) => {
  const opts = { new: true, runValidators: true };
  const zine = await Product.findByIdAndUpdate(req.params.id, req.body, opts);
  if (!zine) throw new BadRequestError("Zine Not Found.");

  zine.vatPrice = zine.calculateVat();
  zine.netPrice = zine.calculateNet();
  await zine.save();

  res.status(200).json(zine);
});

export const addZineImage = asyncHandler(
  async (req: Request, res: Response) => {
    const zine = await Product.findById(req.params.id);
    if (!zine) throw new BadRequestError("Zine Not Found.");

    const image = req.body.image;
    zine.images.push(image);
    await zine.save();

    res.status(200).json(zine);
  }
);

export const deleteZineImage = asyncHandler(
  async (req: Request, res: Response) => {
    let zine = await Product.findById(req.params.id);
    if (!zine) throw new BadRequestError("Zine Not Found.");

    const imgStr: string = req.body.imgStr;
    const removeIndex = zine.images.indexOf(imgStr);

    if (removeIndex) zine.images.splice(removeIndex, 1);
    if (!removeIndex) throw new BadRequestError("Page Not Found.");

    await zine.save();

    res.status(200).json(zine);
  }
);

export const deleteZine = asyncHandler(async (req: Request, res: Response) => {
  const zine = await Product.findById(req.params.id);
  zine?.remove();
  res.status(200).json(zine);
});
