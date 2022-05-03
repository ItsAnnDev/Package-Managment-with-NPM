var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

// (1) Meet the node console
bGround.log('Hello World');

module.exports = app;