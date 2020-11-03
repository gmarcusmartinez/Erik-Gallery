"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
};
