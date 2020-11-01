import { body } from "express-validator";

export const createPrintValidation = [
  body("description").notEmpty().withMessage("Description required."),
  body("image").notEmpty().withMessage("Image required."),
  body("size").notEmpty().withMessage("Size required."),
  body("price").notEmpty().withMessage("Price required."),
  body("inStock").notEmpty().withMessage("In stock required."),
];