"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var path_1 = __importDefault(require("path"));
var heroku_ssl_redirect_1 = __importDefault(require("heroku-ssl-redirect"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cookie_session_1 = __importDefault(require("cookie-session"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = require("./routes/auth");
var backgrounds_1 = require("./routes/backgrounds");
var orders_1 = require("./routes/orders");
var prints_1 = require("./routes/prints");
var projects_1 = require("./routes/projects");
var upload_1 = require("./routes/upload");
var not_found_error_1 = require("./errors/not-found-error");
var error_handler_1 = require("./middlewares/error-handler");
var app = express_1.default();
exports.app = app;
app.use(heroku_ssl_redirect_1.default());
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(cookie_session_1.default({ signed: false, secure: false }));
app.use('/api/auth', auth_1.authRouter);
app.use('/api/uploads', upload_1.uploadRouter);
app.use('/api/backgrounds', backgrounds_1.backgroundRouter);
app.use('/api/orders', orders_1.orderRouter);
app.use('/api/prints', prints_1.printRouter);
app.use('/api/projects', projects_1.projectRouter);
var __dirname = path_1.default.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        return res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.all('*', function () {
    throw new not_found_error_1.NotFoundError();
});
app.use(error_handler_1.errorHandler);
