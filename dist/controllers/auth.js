"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signout = exports.login = exports.register = exports.getCurrentUser = void 0;
var User_1 = require("../models/User");
var bad_request_error_1 = require("../errors/bad-request-error");
var async_1 = require("../middlewares/async");
var PasswordManager_1 = require("../services/PasswordManager");
exports.getCurrentUser = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentUser;
    return __generator(this, function (_a) {
        currentUser = req.currentUser || null;
        res.send(currentUser);
        return [2 /*return*/];
    });
}); });
exports.register = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, existingUser, user, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 1:
                existingUser = _b.sent();
                if (existingUser)
                    throw new bad_request_error_1.BadRequestError("Email in use.");
                if (!email || !password)
                    throw new bad_request_error_1.BadRequestError("Please provide all required fields.");
                user = User_1.User.build({ email: email, password: password });
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                token = user.getSignedJwtToken();
                req.session = { jwt: token };
                res.status(200).send({});
                return [2 /*return*/];
        }
    });
}); });
exports.login = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, passwordsMatch, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new bad_request_error_1.BadRequestError("Invalid credentials");
                return [4 /*yield*/, PasswordManager_1.PasswordManager.compare(user.password, password)];
            case 2:
                passwordsMatch = _b.sent();
                if (!passwordsMatch)
                    throw new bad_request_error_1.BadRequestError("Invalid Credentials");
                token = user.getSignedJwtToken();
                req.session = { jwt: token };
                res.status(200).send(user);
                return [2 /*return*/];
        }
    });
}); });
exports.signout = function (req, res) {
    req.session = null;
    res.send({});
};
