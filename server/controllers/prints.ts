import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async";
// import prints from "../data/prints";

export const getPrints = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({});
});

// export const getProduct = asyncHandler(async (req: Request, res: Response) => {
//   const response = await products.find((p) => p._id === req.params.id);
//   res.status(200).send(response);
// });
