import { body } from "express-validator";

export const registerValidation = [
  body("email").not().isEmpty().withMessage("Email required."),
  body("password")
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage("Password must be between 6 and 20 carachters."),
];

export const loginValidation = [
  body("email").isEmail().withMessage("Email must be valid."),
  body("password").trim().notEmpty().withMessage("Password is required."),
];
