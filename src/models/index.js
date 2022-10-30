const Sequelize = require('sequelize')
const readerModel = require('./reader')
const bookModel = require('./book')
const authorModel = require('./author')
const genreModel = require('./genre')

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env

const setupDatabase = () => {
  const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false
  })

  const Reader = readerModel(connection, Sequelize)
  const Book = bookModel(connection, Sequelize)
  const Author = authorModel(connection, Sequelize)
  const Genre = genreModel(connection, Sequelize)

  Reader.hasMany(Book)
  Author.hasMany(Book)
  Genre.hasMany(Book)
  Book.belongsTo(Author)
  Book.belongsTo(Genre)

  connection.sync({ alter: true })
  return {
    Reader,
    Book,
    Author,
    Genre
  }
}

module.exports = setupDatabase()
