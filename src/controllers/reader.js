const { Reader } = require('../models')

exports.create = async (req, res) => {
  try {
    const newReader = await Reader.create(req.body)
    res.status(201).json(newReader)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.read = async (_, res) => {
  const readers = await Reader.findAll()
  res.status(200).json(readers)
}
exports.readById = async (req, res) => {
  const readerId = req.params.id

  const reader = await Reader.findByPk(readerId, {
    raw: true
  })

  if (!reader) {
    res.status(404).json({ error: 'The reader could not be found.' })
  } else {
    res.status(200).json(reader)
  }
}
exports.update = async (req, res) => {
  const updateData = req.body
  const readerId = req.params

  const [updatedRows] = await Reader.update(updateData, { where: readerId })
  if (!updatedRows) {
    res.status(404).json({ error: 'The reader could not be found.' })
  } else {
    res.status(200).send()
  }
}

exports.delete = async (req, res) => {
  const readerId = req.params
  try {
    const deletedRows = await Reader.destroy({ where: readerId })
    if (!deletedRows) {
      res.status(404).json({ error: 'The reader could not be found.' })
    } else {
      res.status(204).send()
    }
  } catch (err) {
    res.sendStatus(500)
  }
}
