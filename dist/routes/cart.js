"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
var express_1 = require("express");
var cart_1 = require("../controllers/cart");
var router = express_1.Router();
exports.cartRouter = router;
router.route("/").get(cart_1.getCart);
router.route("/").post(cart_1.createCart);
