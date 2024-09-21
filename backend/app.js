const express = require('express');
const cors = require('cors');
const mainRouter = require('./router/mainRouter');
const tracker = require('./tracker/tracker')

app = express();


app.use(express.json())
app.use(cors())


app.use('/',mainRouter)

tracker.printdata();

module.exports = app;

