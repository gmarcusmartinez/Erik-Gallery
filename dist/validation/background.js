"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackgroundValidation = void 0;
var express_validator_1 = require("express-validator");
exports.createBackgroundValidation = [
    express_validator_1.body("mainImage").notEmpty().withMessage("Image required."),
];
