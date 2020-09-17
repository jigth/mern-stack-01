const express = require('express');
const app = express();

app.use('/notes', require('./notes'));
app.use('/users', require('./users'));

module.exports = app;