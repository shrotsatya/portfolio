"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var compression = require("compression");
var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(compression());
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT||5000);

