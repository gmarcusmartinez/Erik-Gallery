"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var db_1 = require("./config/db");
db_1.connectDB();
var PORT = process.env.PORT || 5000;
app_1.app.listen(PORT, function () { return console.log("Server running on port " + PORT); });
