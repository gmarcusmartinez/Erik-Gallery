import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async";

export const getPrints = asyncHandler(async (req: Request, res: Response) => {
  // const prints = await Print.find({});
  res.status(200).json({ this: "will be the print route" });
});
