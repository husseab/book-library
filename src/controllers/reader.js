const { Reader } = require('../models')

exports.create = async (req, res) => {
  const newReader = await Reader.create(req.body)
  res.status(201).json(newReader)
}
exports.read = async (_, res) => {
  const readers = await Reader.findAll()
  res.status(200).json(readers)
}
exports.readById = async (req, res) => {
  const readerId = req.params.id

  console.log(req.params, '<-req.paramsCntrl')
  console.log(readerId, '<-readerIdCntrl')

  const reader = await Reader.findByPK(readerId)

  console.log(reader, '<-readerController')

  if (!reader) {
    res.sendStatus(404)
  } else {
    res.status(200).json(reader)
  }
}
exports.update = async (req, res) => {
  const updateData = req.body
  const readerId = req.params

  const [updatedRows] = await Reader.update(updateData, { where: readerId })
  console.log(updatedRows, '<-updatedrows')
  if (!updatedRows) {
    res.sendStatus(404).send(err)
  } else {
    res.status(200).send()
  }
}

exports.delete = async (req, res) => {
  const readerId = req.params
  console.log(readerId, '<-readerIdCntrl')
  try {
    const deletedRows = await Reader.destroy({ where: readerId })
    console.log(deletedRows, '<-deletedrows')
    if (!deletedRows) {
      res.sendStatus(404)
    } else {
      res.status(204).send()
    }
  } catch (err) {
    res.sendStatus(500)
  }
}
