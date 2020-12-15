import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { asyncHandler } from "../middlewares/async";
import { Background } from "../models/Background";

export const getBackgrounds = asyncHandler(async (req: Request, res: any) => {
  const backgrounds = await Background.find();
  res.status(200).json(backgrounds);
});

export const createBackground = asyncHandler(
  async (req: Request, res: Response) => {
    const background = Background.build({ ...req.body });
    await background.save();
    res.status(200).json(background);
  }
);

export const setActive = asyncHandler(async (req: Request, res: Response) => {
  let background = await Background.findById(req.params.id);
  if (!background) throw new BadRequestError("Background Not Found.");

  const currentlyActive = await Background.findOneAndUpdate(
    { active: true },
    { active: false }
  );
  await currentlyActive!.save();

  const opts = { new: true, runValidators: true };
  const id = req.params.id;
  background = await Background.findByIdAndUpdate(id, { active: true }, opts);
  const backgrounds = await Background.find({});
  res.status(200).json(backgrounds);
});

export const deleteBackground = asyncHandler(
  async (req: Request, res: Response) => {
    const backgrounds = await Background.countDocuments();
    if (backgrounds <= 1) {
      throw new BadRequestError("There must be at least one background image.");
    }

    const background = await Background.findById(req.params.id);
    if (!background) throw new BadRequestError("Background Not Found.");
    if (background.active === true) {
      throw new BadRequestError("Set bacground to inactive before deleting.");
    }

    background.remove();
    res.status(200).json(background);
  }
);
