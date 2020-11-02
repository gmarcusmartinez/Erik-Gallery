import { Request, Response } from "express";

// export const getCurrentUser = asyncHandler(
//     async (req: Request, res: Response) => {
//       res.send(req.currentUser);
//     }
//   );

export const getCurrentUser = (req: Request, res: Response) => {
  res.send("hi there");
};
