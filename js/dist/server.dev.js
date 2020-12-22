"use strict";

var express = require('express');

var path = require('path');

var http = require('http');

var app = express();
app.use('/', express["static"](path.join(__dirname, 'static')));
app.listen(9999, function () {
  console.log('server is running');
});