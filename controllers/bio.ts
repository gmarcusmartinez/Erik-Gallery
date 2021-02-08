import { Request, Response } from 'express';
import { BadRequestError } from '../errors/bad-request-error';
import { asyncHandler } from '../middlewares/async';
import { Bio } from '../models/Bio';

export const getBio = asyncHandler(async (req: Request, res: any) => {
  const bio = await Bio.findById('6021a4adc759c7bbb5976449');
  if (!bio) throw new BadRequestError('Bio Not Found.');
  res.status(200).json([bio]);
});

export const updateBio = asyncHandler(async (req: Request, res: Response) => {
  const opts = { new: true, runValidators: true };
  const bio = await Bio.findByIdAndUpdate(req.params.id, req.body, opts);
  if (!bio) throw new BadRequestError('Bio Not Found.');
  await bio.save();
  res.status(200).json([bio]);
});
