import { body } from "express-validator";

export const createZineValidation = [
  body("title").notEmpty().withMessage("Title required."),
  body("mainImage").notEmpty().withMessage("Main immage required."),
  body("price").notEmpty().withMessage("Price required."),
  body("quantityInStock").notEmpty().withMessage("Please enter a quantity."),
];
