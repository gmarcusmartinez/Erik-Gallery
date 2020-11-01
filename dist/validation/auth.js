"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
var express_validator_1 = require("express-validator");
exports.registerValidation = [
    express_validator_1.body("email").not().isEmpty().withMessage("Email required."),
    express_validator_1.body("password")
        .trim()
        .isLength({ min: 6, max: 20 })
        .withMessage("Password must be between 6 and 20 carachters."),
];
exports.loginValidation = [
    express_validator_1.body("email").isEmail().withMessage("Email must be valid."),
    express_validator_1.body("password").trim().notEmpty().withMessage("Password is required."),
];
