import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Background } from "../models/Background";

// export const getBackgrounds = asyncHandler(async (req: Request, res: any) => {
//   const prints = await Product.find({ type: ProductType.Print });
//   res.status(200).json(prints);
// });

// export const getBackground = asyncHandler(async (req: Request, res: any) => {
//   const print = await Product.findById(req.params.id);
//   if (!print) throw new BadRequestError("Print not found.");
//   res.status(200).json(print);
// });

export const createBackground = asyncHandler(
  async (req: Request, res: Response) => {
    const background = Background.build({ ...req.body });
    await background.save();
    res.status(200).json(background);
  }
);

// export const updatePrint = asyncHandler(async (req: Request, res: Response) => {
//   let print = await Product.findById(req.params.id);
//   if (!print) throw new BadRequestError("Print Not Found.");

//   const opts = { new: true, runValidators: true };
//   print = await Product.findByIdAndUpdate(req.params.id, req.body, opts);
//   res.status(200).json(print);
// });

// export const deletePrint = asyncHandler(async (req: Request, res: Response) => {
//   const print = await Product.findById(req.params.id);
//   print?.remove();
//   res.status(200).json(print);
// });
