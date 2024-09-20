const express = require('express');
const mainRouter = require('./router/mainRouter')
app = express();


app.use('/', mainRouter)

module.exports = app;

