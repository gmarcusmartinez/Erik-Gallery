"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
var not_admin_error_1 = require("../errors/not-admin-error");
exports.isAdmin = function (req, res, next) {
    var _a;
    if (((_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.role) !== "admin")
        throw new not_admin_error_1.NotAdminError();
    next();
};
