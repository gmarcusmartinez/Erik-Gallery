"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrintValidation = void 0;
var express_validator_1 = require("express-validator");
exports.createPrintValidation = [
    express_validator_1.body("description").notEmpty().withMessage("Description required."),
    express_validator_1.body("image").notEmpty().withMessage("Image required."),
    express_validator_1.body("size").notEmpty().withMessage("Size required."),
    express_validator_1.body("price").notEmpty().withMessage("Price required."),
    express_validator_1.body("inStock").notEmpty().withMessage("In stock required."),
];