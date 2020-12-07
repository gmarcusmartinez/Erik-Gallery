"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var backgroundSchema = new mongoose_1.default.Schema({
    mainImage: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    type: {
        type: String,
        default: "background",
    },
});
backgroundSchema.statics.build = function (attrs) {
    return new Background(attrs);
};
var Background = mongoose_1.default.model("Background", backgroundSchema);
exports.Background = Background;
