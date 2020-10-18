import { body } from "express-validator";

export const registerValidation = [
  body("userName")
    .isLength({ min: 2, max: 20 })
    .withMessage("User name must be between 2 and 20 characters."),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 carachters."),
];

export const loginValidation = [
  body("userName").exists().withMessage("Must fill in username field"),
  body("password").trim().notEmpty().withMessage("Password Required."),
];
