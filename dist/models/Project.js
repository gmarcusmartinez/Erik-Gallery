"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var projectSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    medium: {
        type: String,
    },
    mainImage: {
        type: String,
        required: true,
    },
    images: [String],
    isPublished: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'project',
    },
});
projectSchema.statics.build = function (attrs) {
    return new Project(attrs);
};
var Project = mongoose_1.default.model('Project', projectSchema);
exports.Project = Project;
