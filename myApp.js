var express = require('express');
var app = express();
const router = express.Router();
var bGround = require('fcc-express-bground');

// 1) Meet the node console
bGround.log("Hello World");