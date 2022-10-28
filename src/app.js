const express = require('express')
const readerModel = require('../src/routes/reader')
const bookModel = require('../src/routes/book')
const authorModel = require('../src/routes/author')
const genreModel = require('../src/routes/genre')

const app = express()

app.use(express.json())

app.use('/readers', readerModel)
app.use('/books', bookModel)
app.use('/authors', authorModel)
app.use('/genre', genreModel)

module.exports = app
