const express = require('express');
const app = express();

const testRouter = require('./test');

app.use('', testRouter);


module.exports = app;