"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAdminError = void 0;
var custom_error_1 = require("./custom-error");
var NotAdminError = /** @class */ (function (_super) {
    __extends(NotAdminError, _super);
    function NotAdminError() {
        var _this = _super.call(this, "") || this;
        _this.statusCode = 401;
        _this.reason = "You are unauthorized to make this request";
        Object.setPrototypeOf(_this, NotAdminError.prototype);
        return _this;
    }
    NotAdminError.prototype.serializeErrors = function () {
        return [{ message: this.reason }];
    };
    return NotAdminError;
}(custom_error_1.CustomError));
exports.NotAdminError = NotAdminError;
