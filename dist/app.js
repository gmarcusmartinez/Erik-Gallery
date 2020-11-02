"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cookie_session_1 = __importDefault(require("cookie-session"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = require("./routes/auth");
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/api/auth", auth_1.authRouter);
app.use(cookie_session_1.default({ signed: false, secure: false }));
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
    app.get("*", function (req, res) {
        return res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
    });
}
