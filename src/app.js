var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();

// require dotenv config
require('dotenv').config()

// cors configuration
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

/// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// morgan config
(app.get('env') !== 'production') && app.use(logger('dev'));

// cookie parser
app.use(cookieParser());

// routes
app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next({ resource: true });
});

// error handler
app.use(require('./middlewares/errorHandler'));

module.exports = app;