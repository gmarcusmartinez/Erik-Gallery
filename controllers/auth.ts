import { Request, Response } from 'express';
import { User } from '../models/User';
import { BadRequestError } from '../errors/bad-request-error';
import { asyncHandler } from '../middlewares/async';
import { PasswordManager } from '../services/PasswordManager';

export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response) => {
    const currentUser = req.currentUser || null;
    res.send(currentUser);
  }
);

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new BadRequestError('Email in use.');

  if (!email || !password)
    throw new BadRequestError('Please provide all required fields.');

  const user = User.build({ email, password });
  await user.save();

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(200).send({});
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new BadRequestError('Invalid credentials');

  const passwordsMatch = await PasswordManager.compare(user.password, password);
  if (!passwordsMatch) throw new BadRequestError('Invalid Credentials');

  const token = user.getSignedJwtToken();
  req.session = { jwt: token };

  res.status(200).send(user);
});

export const logout = (req: Request, res: Response) => {
  req.session = null;
  res.send(null);
};
