"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var validate_request_1 = require("../middlewares/validate-request");
var current_user_1 = require("../middlewares/current-user");
var auth_2 = require("../validation/auth");
var router = express_1.Router();
exports.authRouter = router;
router.route("/currentUser").get(current_user_1.currentUser, auth_1.getCurrentUser);
router.route("/login").post(auth_2.loginValidation, validate_request_1.validateRequest, auth_1.login);
router.route("/logout").post(auth_1.logout);
router.route("/register").post(auth_2.registerValidation, validate_request_1.validateRequest, auth_1.register);
