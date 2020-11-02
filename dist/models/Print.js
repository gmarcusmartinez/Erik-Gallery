"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var printSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
printSchema.statics.build = function (attrs) {
    return new Print(attrs);
};
var Print = mongoose_1.default.model("Print", printSchema);
exports.Print = Print;
