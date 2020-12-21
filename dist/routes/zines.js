"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zineRouter = void 0;
var express_1 = require("express");
var zineControllers = __importStar(require("../controllers/zines"));
var current_user_1 = require("../middlewares/current-user");
var is_admin_1 = require("../middlewares/is-admin");
var require_auth_1 = require("../middlewares/require-auth");
var validate_request_1 = require("../middlewares/validate-request");
var zine_1 = require("../validation/zine");
var advanced_results_1 = require("../middlewares/advanced-results");
var Product_1 = require("../models/Product");
var router = express_1.Router();
exports.zineRouter = router;
router
    .route("/")
    .get(advanced_results_1.advancedResults(Product_1.Product, Product_1.ProductType.Zine), zineControllers.getZines);
router.route("/:id").get(zineControllers.getZine);
router
    .route("/admin")
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, zineControllers.adminGetZines);
router
    .route("/")
    .post(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, zine_1.createZineValidation, validate_request_1.validateRequest, zineControllers.createZine);
router
    .route("/:id")
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, zine_1.createZineValidation, validate_request_1.validateRequest, zineControllers.updateZine);
router
    .route("/:id")
    .patch(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, zineControllers.addZineImage);
router
    .route("/:id/deletePage")
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, zineControllers.deleteZineImage);
router
    .route("/:id")
    .delete(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, zineControllers.deleteZine);
