import { body } from "express-validator";

export const createBackgroundValidation = [
  body("mainImage").notEmpty().withMessage("Image required."),
];
