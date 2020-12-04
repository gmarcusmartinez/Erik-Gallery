"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderValidation = void 0;
var express_validator_1 = require("express-validator");
exports.createOrderValidation = [
    express_validator_1.body("paymentMethod").notEmpty().withMessage("Payment Method required."),
    express_validator_1.body("shippingAddress.name").notEmpty().withMessage("Name required."),
    express_validator_1.body("shippingAddress.address").notEmpty().withMessage("Address required."),
    express_validator_1.body("shippingAddress.city").notEmpty().withMessage("City required."),
    express_validator_1.body("shippingAddress.country").notEmpty().withMessage("Country required."),
    express_validator_1.body("shippingAddress.postalCode")
        .notEmpty()
        .withMessage("Postal Code required."),
];
