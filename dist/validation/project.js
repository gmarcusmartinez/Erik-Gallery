"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectValidation = void 0;
var express_validator_1 = require("express-validator");
exports.createProjectValidation = [
    express_validator_1.body('title').notEmpty().withMessage('Title required.'),
    express_validator_1.body('mainImage').notEmpty().withMessage('Image required.'),
];
