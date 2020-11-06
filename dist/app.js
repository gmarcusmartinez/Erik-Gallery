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
var dotenv_1 = __importDefault(require("dotenv"));
var auth_1 = require("./routes/auth");
var prints_1 = require("./routes/prints");
var upload_1 = require("./routes/upload");
var orders_1 = require("./routes/orders");
var not_found_error_1 = require("./errors/not-found-error");
var error_handler_1 = require("./middlewares/error-handler");
dotenv_1.default.config();
var app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(cookie_session_1.default({ signed: false, secure: false }));
app.use("/api/auth", auth_1.authRouter);
app.use("/api/prints", prints_1.printRouter);
app.use("/api/orders", orders_1.orderRouter);
app.use("/api/uploads", upload_1.uploadRouter);
var __dirname = path_1.default.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
    app.get("*", function (req, res) {
        return res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
    });
}
app.all("*", function () {
    throw new not_found_error_1.NotFoundError();
});
app.use(error_handler_1.errorHandler);
