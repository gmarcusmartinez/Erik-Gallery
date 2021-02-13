"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.deletePrint = exports.updatePrint = exports.createPrint = exports.getPrint = exports.adminGetPrints = exports.getPrints = void 0;
var bad_request_error_1 = require("../errors/bad-request-error");
var async_1 = require("../middlewares/async");
var Print_1 = require("../models/Print");
exports.getPrints = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).json(res.advancedResults);
        return [2 /*return*/];
    });
}); });
exports.adminGetPrints = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var prints;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Print_1.Print.find({})];
            case 1:
                prints = _a.sent();
                res.send(prints);
                return [2 /*return*/];
        }
    });
}); });
exports.getPrint = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var print;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Print_1.Print.findById(req.params.id)];
            case 1:
                print = _a.sent();
                if (!print)
                    throw new bad_request_error_1.BadRequestError('Print not found.');
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
exports.createPrint = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var print;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                print = Print_1.Print.build(__assign({}, req.body));
                return [4 /*yield*/, print.save()];
            case 1:
                _a.sent();
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
exports.updatePrint = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var opts, print;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                opts = { new: true, runValidators: true };
                return [4 /*yield*/, Print_1.Print.findByIdAndUpdate(req.params.id, req.body, opts)];
            case 1:
                print = _a.sent();
                if (!print)
                    throw new bad_request_error_1.BadRequestError('Print Not Found.');
                return [4 /*yield*/, print.save()];
            case 2:
                _a.sent();
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
exports.deletePrint = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var print;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Print_1.Print.findById(req.params.id)];
            case 1:
                print = _a.sent();
                if (!print)
                    throw new bad_request_error_1.BadRequestError('Print not found.');
                print.remove();
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
