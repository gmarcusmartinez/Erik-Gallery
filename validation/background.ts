import { body } from "express-validator";

export const createBackgroundValidation = [
  body("image").notEmpty().withMessage("Image required."),
];
