const express = require('express');
const ReaderModel = require('../src/routes/reader');
const bookModel = require('../src/routes/book');

const app = express();

app.use(express.json());

app.use('/readers', ReaderModel);
app.use('/books', bookModel);

module.exports = app;