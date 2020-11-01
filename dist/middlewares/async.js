"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
exports.asyncHandler = function (fn) { return function (req, res, next) { return Promise.resolve(fn(req, res, next)).catch(next); }; };
