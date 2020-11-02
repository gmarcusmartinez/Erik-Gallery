"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE,
    jwtCookieExpire: process.env.JWT_COOKIE_EXPIRE,
};
