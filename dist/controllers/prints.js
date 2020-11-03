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
exports.remove = exports.update = exports.create = exports.get = exports.getAll = void 0;
var bad_request_error_1 = require("../errors/bad-request-error");
var async_1 = require("../middlewares/async");
var Print_1 = require("../models/Print");
exports.getAll = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).json(res.advancedResults);
        return [2 /*return*/];
    });
}); });
exports.get = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var print;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Print_1.Print.findById(req.params.id)];
            case 1:
                print = _a.sent();
                if (!print)
                    throw new bad_request_error_1.BadRequestError("Print not found.");
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
exports.create = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, description, image, size, price, inStock, print;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, description = _a.description, image = _a.image, size = _a.size, price = _a.price, inStock = _a.inStock;
                print = Print_1.Print.build({ description: description, image: image, size: size, price: price, inStock: inStock });
                return [4 /*yield*/, print.save()];
            case 1:
                _b.sent();
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
exports.update = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var print, opts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Print_1.Print.findById(req.params.id)];
            case 1:
                print = _a.sent();
                if (!print)
                    throw new bad_request_error_1.BadRequestError("Print Not Found.");
                opts = { new: true, runValidators: true };
                return [4 /*yield*/, Print_1.Print.findByIdAndUpdate(req.params.id, req.body, opts)];
            case 2:
                print = _a.sent();
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
exports.remove = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, print;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Print_1.Print.findById(id)];
            case 1:
                print = _a.sent();
                print === null || print === void 0 ? void 0 : print.remove();
                res.status(200).json(print);
                return [2 /*return*/];
        }
    });
}); });
