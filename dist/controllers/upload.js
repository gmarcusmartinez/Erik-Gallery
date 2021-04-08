"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpload = void 0;
var uuid_1 = require("uuid");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var keys_1 = __importDefault(require("../config/keys"));
var s3 = new aws_sdk_1.default.S3({
    accessKeyId: keys_1.default.accessKeyId,
    secretAccessKey: keys_1.default.secretAccessKey,
    signatureVersion: 'v4',
    region: 'us-west-1',
});
exports.createUpload = function (req, res) {
    var key = req.currentUser._id + "/" + uuid_1.v4() + ".jpeg";
    s3.getSignedUrl('putObject', { Bucket: 'erik-gallery', ContentType: 'image/jpeg', Key: key }, function (err, url) { return res.send({ key: key, url: url }); });
};
