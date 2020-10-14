import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async";
import { Print } from "../models/Print";

export const getPrints = asyncHandler(async (req: Request, res: Response) => {
  const prints = await Print.find({});
  res.status(200).json(prints);
});

// export const getProduct = asyncHandler(async (req: Request, res: Response) => {
//   const response = await products.find((p) => p._id === req.params.id);
//   res.status(200).send(response);
// });
