"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
var express_1 = require("express");
// import { validateRequest } from "../middlewares/validate-request";
var current_user_1 = require("../middlewares/current-user");
var require_auth_1 = require("../middlewares/require-auth");
var is_admin_1 = require("../middlewares/is-admin");
var orders_1 = require("../controllers/orders");
var router = express_1.Router();
exports.orderRouter = router;
router.route("/").post(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, orders_1.createOrder);
