"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paypalRouter = void 0;
var express_1 = require("express");
var keys_1 = __importDefault(require("../config/keys"));
var router = express_1.Router();
exports.paypalRouter = router;
router.get("/paypal", function (req, res) {
    res.send(keys_1.default.paypalClientID);
});
