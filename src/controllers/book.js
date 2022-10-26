const { Book } = require('../models')
const createItem = require('../controllers/helpers')

exports.create = async (req, res) => {
  try {
    const newBook = await Book.create(req.body)
    res.status(201).json(newBook)
  } catch (error) {
    const errorMessages = error.errors.map((e) => e.message)
    res.status(404).json({ errors: errorMessages })
  }
}
exports.read = async (_, res) => {
  const books = await Book.findAll()
  res.status(200).json(books)
}
exports.readById = async (req, res) => {
  const bookId = req.params.id

  const book = await Book.findByPk(bookId, {
    raw: true
  })

  if (!book) {
    res.status(404).json({ error: 'The book could not be found.' })
  } else {
    res.status(200).json(book)
  }
}
exports.update = async (req, res) => {
  const updateData = req.body
  const bookId = req.params

  const [updatedRows] = await Book.update(updateData, { where: bookId })
  if (!updatedRows) {
    res.status(404).json({ error: 'The book could not be found.' })
  } else {
    res.status(200).send()
  }
}

exports.delete = async (req, res) => {
  const bookId = req.params
  try {
    const deletedRows = await Book.destroy({ where: bookId })
    if (!deletedRows) {
      res.status(404).json({ error: 'The book could not be found.' })
    } else {
      res.status(204).send()
    }
  } catch (err) {
    res.sendStatus(500)
  }
}
