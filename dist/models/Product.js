"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductType = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ProductType;
(function (ProductType) {
    ProductType["Print"] = "print";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
var productSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    mainImage: {
        type: String,
    },
    images: [String],
    size: {
        type: String,
    },
    type: {
        type: String,
        required: true,
        enum: Object.values(ProductType),
    },
    price: {
        type: String,
        required: true,
    },
    quantityInStock: {
        type: Number,
        required: true,
    },
});
productSchema.statics.build = function (attrs) {
    return new Product(attrs);
};
var Product = mongoose_1.default.model("Product", productSchema);
exports.Product = Product;
