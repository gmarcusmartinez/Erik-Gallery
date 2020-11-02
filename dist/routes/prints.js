"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printRouter = void 0;
var express_1 = require("express");
var prints_1 = require("../controllers/prints");
var router = express_1.Router();
exports.printRouter = router;
router.route("/").get(prints_1.getPrints);
