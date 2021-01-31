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
exports.projectRouter = void 0;
var express_1 = require("express");
var projectControllers = __importStar(require("../controllers/projects"));
var advanced_results_1 = require("../middlewares/advanced-results");
var current_user_1 = require("../middlewares/current-user");
var is_admin_1 = require("../middlewares/is-admin");
var require_auth_1 = require("../middlewares/require-auth");
var validate_request_1 = require("../middlewares/validate-request");
var Project_1 = require("../models/Project");
var project_1 = require("../validation/project");
var router = express_1.Router();
exports.projectRouter = router;
router.route('/').get(advanced_results_1.advancedResults(Project_1.Project), projectControllers.getProjects);
router.route('/:id').get(projectControllers.getProject);
router
    .route('/admin')
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, projectControllers.adminGetProjects);
router
    .route('/')
    .post(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, project_1.createProjectValidation, validate_request_1.validateRequest, projectControllers.createProject);
router
    .route('/:id')
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, project_1.createProjectValidation, validate_request_1.validateRequest, projectControllers.updateProject);
router
    .route('/:id')
    .patch(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, projectControllers.addProjectImage);
router
    .route('/:id/deletePage')
    .put(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, projectControllers.deleteProjectImage);
router
    .route('/:id')
    .delete(current_user_1.currentUser, require_auth_1.requireAuth, is_admin_1.isAdmin, projectControllers.deleteProject);
