import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { User } from "../models/User";
import { PasswordManager } from "../services/PasswordManager";

// export const getCurrentUser = asyncHandler(
//   async (req: Request, res: Response) => {
//     const user = await User.findById(req.currentUser._id);
//     if (!user) throw new NotAuthorizedError();
//     res.send(user);
//   }
// );

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const existingUser = await User.findOne({ userName });
  if (existingUser) throw new BadRequestError("User name in use.");

  if (!password || !userName)
    throw new BadRequestError("Please provide all required fields.");

  const user = User.build({ userName, password });
  await user.save();

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(201).send(user);
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });
  if (!user) throw new BadRequestError("Invalid credentials");

  const passwordsMatch = await PasswordManager.compare(user.password, password);
  if (!passwordsMatch) throw new BadRequestError("Invalid Credentials");

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(200).send(user);
});
