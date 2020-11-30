"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createZineValidation = void 0;
var express_validator_1 = require("express-validator");
exports.createZineValidation = [
    express_validator_1.body("title").notEmpty().withMessage("Title required."),
    express_validator_1.body("mainImage").notEmpty().withMessage("Main immage required."),
    express_validator_1.body("price").notEmpty().withMessage("Price required."),
    express_validator_1.body("quantityInStock").notEmpty().withMessage("Please enter a quantity."),
];
