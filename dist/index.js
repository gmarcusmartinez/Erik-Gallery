"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var db_1 = require("./config/db");
db_1.connectDB();
app_1.app.listen(process.env.PORT, function () { return console.log("Server running on port 5000"); });
