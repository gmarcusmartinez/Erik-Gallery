import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async";
import { BadRequestError } from "../errors/bad-request-error";

// export const getCurrentUser = asyncHandler(
//     async (req: Request, res: Response) => {
//       res.send(req.currentUser);
//     }
//   );

export const getCurrentUser = (req: Request, res: Response) => {
  res.send("hi there");
};

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // const existingUser = await User.findOne({ email });
  // if (existingUser) throw new BadRequestError("Email in use.");

  if (!email || !password)
    throw new BadRequestError("Please provide all required fields.");

  // const user = User.build({ email, password });
  // await user.save();

  // const token = user.getSignedJwtToken();
  // req.session = { jwt: token };
  res.status(200).send({ email, password });
});
