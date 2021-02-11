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
    ProductType["Project"] = "project";
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
        required: true,
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
        type: Number,
        required: true,
    },
    vatPrice: {
        type: Number,
        required: true,
    },
    netPrice: {
        type: Number,
        required: true,
    },
    quantityInStock: {
        type: Number,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
});
productSchema.statics.build = function (attrs) {
    return new Product(attrs);
};
productSchema.methods.createSubDoc = function () {
    var _a = this, _id = _a._id, title = _a.title, description = _a.description, mainImage = _a.mainImage, price = _a.price;
    return { _id: _id, title: title, description: description, mainImage: mainImage, price: price };
};
productSchema.methods.calculateVat = function () {
    var vatRate = 0.16;
    var price = this.price;
    return price * vatRate;
};
productSchema.methods.calculateNet = function () {
    var vatRate = 0.16;
    var price = this.price;
    return price - price * vatRate;
};
var Product = mongoose_1.default.model('Product', productSchema);
exports.Product = Product;
