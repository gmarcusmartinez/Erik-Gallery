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
exports.updateOrderToPaid = exports.getOrder = exports.getOrders = exports.createOrder = void 0;
var bad_request_error_1 = require("../errors/bad-request-error");
var async_1 = require("../middlewares/async");
var Order_1 = require("../models/Order");
var Product_1 = require("../models/Product");
exports.createOrder = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderItems, orderItemIds, products, soldOutmsg, _a, shippingAddress, paymentMethod, itemsPrice, vatPrice, shippingPrice, totalPrice, order;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                orderItems = req.body.orderItems;
                if (orderItems && orderItems.length <= 0)
                    throw new bad_request_error_1.BadRequestError("No items in cart");
                orderItemIds = [];
                orderItems.forEach(function (item) { return orderItemIds.push(item._id); });
                return [4 /*yield*/, Product_1.Product.find({
                        _id: { $in: orderItemIds },
                        quantityInStock: { $gt: 0 },
                    })];
            case 1:
                products = _b.sent();
                soldOutmsg = "One or more products in your cart has recently sold out.";
                if (products.length !== orderItems.length)
                    throw new bad_request_error_1.BadRequestError(soldOutmsg);
                _a = req.body, shippingAddress = _a.shippingAddress, paymentMethod = _a.paymentMethod, itemsPrice = _a.itemsPrice, vatPrice = _a.vatPrice, shippingPrice = _a.shippingPrice, totalPrice = _a.totalPrice;
                order = Order_1.Order.build({
                    orderItems: orderItems,
                    shippingAddress: shippingAddress,
                    paymentMethod: paymentMethod,
                    itemsPrice: itemsPrice,
                    vatPrice: vatPrice,
                    shippingPrice: shippingPrice,
                    totalPrice: totalPrice,
                });
                return [4 /*yield*/, order.save()];
            case 2:
                _b.sent();
                res.send(order);
                return [2 /*return*/];
        }
    });
}); });
exports.getOrders = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Order_1.Order.find()];
            case 1:
                orders = _a.sent();
                res.send(orders);
                return [2 /*return*/];
        }
    });
}); });
exports.getOrder = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Order_1.Order.findById(req.params.id)];
            case 1:
                order = _a.sent();
                res.send(order);
                return [2 /*return*/];
        }
    });
}); });
exports.updateOrderToPaid = async_1.asyncHandler(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Order_1.Order.findById(req.params.id)];
            case 1:
                order = _a.sent();
                if (!order)
                    throw new bad_request_error_1.BadRequestError("Order not found");
                order.isPaid = true;
                order.paidAt = new Date(Date.now());
                order.paymentResult = {
                    id: req.body.id,
                    status: req.body.status,
                    update_time: req.body.update_time,
                    email_address: req.body.email_address,
                };
                return [4 /*yield*/, order.save()];
            case 2:
                _a.sent();
                res.send(order);
                return [2 /*return*/];
        }
    });
}); });
