import { body } from "express-validator";

export const createOrderValidation = [
  body("paymentMethod").notEmpty().withMessage("Payment Method required."),
  body("shippingAddress.name").notEmpty().withMessage("Name required."),
  body("shippingAddress.address").notEmpty().withMessage("Address required."),
  body("shippingAddress.city").notEmpty().withMessage("City required."),
  body("shippingAddress.country").notEmpty().withMessage("Country required."),
  body("shippingAddress.postalCode")
    .notEmpty()
    .withMessage("Postal Code required."),
];
