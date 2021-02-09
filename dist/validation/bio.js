"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatBioValidation = void 0;
var express_validator_1 = require("express-validator");
exports.updatBioValidation = [
    express_validator_1.body('text').not().isEmpty().withMessage('Text must not be empty.'),
];
