const express = require('express');
const ReaderModel = require('../src/routes/reader');

const app = express();

app.use(express.json());

app.use('/readers', ReaderModel);

module.exports = app;