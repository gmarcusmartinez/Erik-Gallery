import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { User } from "../models/User";
import { PasswordManager } from "../services/PasswordManager";

export const getCurrentUser = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new BadRequestError("User name in use.");

  const user = User.build({ email, password });
  await user.save();

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(201).send(user);
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new BadRequestError("Invalid credentials");

  const passwordsMatch = await PasswordManager.compare(user.password, password);
  if (!passwordsMatch) throw new BadRequestError("Invalid Credentials");

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(200).send(user);
});

export const signout = (req: Request, res: Response) => {
  req.session = null;
  res.send({});
};
