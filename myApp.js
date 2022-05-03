var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

// (1) meeting node console
bGround.log("Hello World");
console.log("Hello World");

module.exports = app;