"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bio = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var bioSchema = new mongoose_1.default.Schema({
    text: {
        type: String,
        required: true,
    },
});
bioSchema.statics.build = function (attrs) {
    return new Bio(attrs);
};
var Bio = mongoose_1.default.model('Bio', bioSchema);
exports.Bio = Bio;
