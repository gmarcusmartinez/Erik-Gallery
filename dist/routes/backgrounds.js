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
exports.backgroundRouter = void 0;
var express_1 = require("express");
var bgControllers = __importStar(require("../controllers/backgrounds"));
var current_user_1 = require("../middlewares/current-user");
var is_admin_1 = require("../middlewares/is-admin");
var require_auth_1 = require("../middlewares/require-auth");
var validate_request_1 = require("../middlewares/validate-request");
var background_1 = require("../validation/background");
var router = express_1.Router();
exports.backgroundRouter = router;
router.route("/").get(bgControllers.getBackgrounds);
router
    .route("/")
    .post(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, background_1.createBackgroundValidation, validate_request_1.validateRequest, bgControllers.createBackground);
router
    .route("/:id")
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, validate_request_1.validateRequest, bgControllers.setActive);
router
    .route("/:id")
    .delete(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, bgControllers.deleteBackground);
