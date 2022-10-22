const express = require('express');
const ReaderModel = require('../src/routes/reader');
const BookModel = require('../src/routes/book');

const app = express();

app.use(express.json());

app.use('/readers', ReaderModel);
app.use('/books', BookModel);

module.exports = app;