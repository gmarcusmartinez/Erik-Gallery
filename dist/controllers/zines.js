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
exports.deleteZine = exports.deleteZineImage = exports.addZineImage = exports.updateZine = exports.createZine = exports.getZine = exports.adminGetZines = exports.getZines = void 0;
var bad_request_error_1 = require("../errors/bad-request-error");
var async_1 = require("../middlewares/async");
var Product_1 = require("../models/Product");
exports.getZines = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).json(res.advancedResults);
        return [2 /*return*/];
    });
}); });
exports.adminGetZines = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var zines;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product_1.Product.find({ type: Product_1.ProductType.Zine })];
            case 1:
                zines = _a.sent();
                res.send(zines);
                return [2 /*return*/];
        }
    });
}); });
exports.getZine = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var zine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product_1.Product.findById(req.params.id)];
            case 1:
                zine = _a.sent();
                if (!zine)
                    throw new bad_request_error_1.BadRequestError("Zine not found.");
                res.status(200).json(zine);
                return [2 /*return*/];
        }
    });
}); });
exports.createZine = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var zine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                zine = Product_1.Product.build(__assign(__assign({}, req.body), { type: Product_1.ProductType.Zine }));
                zine.vatPrice = zine.calculateVat();
                zine.netPrice = zine.calculateNet();
                return [4 /*yield*/, zine.save()];
            case 1:
                _a.sent();
                res.status(200).json(zine);
                return [2 /*return*/];
        }
    });
}); });
exports.updateZine = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var opts, zine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                opts = { new: true, runValidators: true };
                return [4 /*yield*/, Product_1.Product.findByIdAndUpdate(req.params.id, req.body, opts)];
            case 1:
                zine = _a.sent();
                if (!zine)
                    throw new bad_request_error_1.BadRequestError("Zine Not Found.");
                zine.vatPrice = zine.calculateVat();
                zine.netPrice = zine.calculateNet();
                return [4 /*yield*/, zine.save()];
            case 2:
                _a.sent();
                res.status(200).json(zine);
                return [2 /*return*/];
        }
    });
}); });
exports.addZineImage = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var zine, image;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product_1.Product.findById(req.params.id)];
            case 1:
                zine = _a.sent();
                if (!zine)
                    throw new bad_request_error_1.BadRequestError("Zine Not Found.");
                image = req.body.image;
                zine.images.push(image);
                return [4 /*yield*/, zine.save()];
            case 2:
                _a.sent();
                res.status(200).json(zine);
                return [2 /*return*/];
        }
    });
}); });
exports.deleteZineImage = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var zine, imgStr, removeIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product_1.Product.findById(req.params.id)];
            case 1:
                zine = _a.sent();
                if (!zine)
                    throw new bad_request_error_1.BadRequestError("Zine Not Found.");
                imgStr = req.body.imgStr;
                removeIndex = zine.images.indexOf(imgStr);
                if (removeIndex)
                    zine.images.splice(removeIndex, 1);
                if (!removeIndex)
                    throw new bad_request_error_1.BadRequestError("Page Not Found.");
                return [4 /*yield*/, zine.save()];
            case 2:
                _a.sent();
                res.status(200).json(zine);
                return [2 /*return*/];
        }
    });
}); });
exports.deleteZine = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var zine;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Product_1.Product.findById(req.params.id)];
            case 1:
                zine = _a.sent();
                zine === null || zine === void 0 ? void 0 : zine.remove();
                res.status(200).json(zine);
                return [2 /*return*/];
        }
    });
}); });
