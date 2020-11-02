"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = express_1.Router();
exports.authRouter = router;
router.route("/currentUser").get(auth_1.getCurrentUser);
