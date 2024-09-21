const express = require('express');
const cors = require('cors');
const mainRouter = require('./router/mainRouter');

app = express();


app.use(express.json())
app.use(cors())


app.use('/',mainRouter)

module.exports = app;

