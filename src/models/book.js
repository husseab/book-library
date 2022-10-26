module.exports = (connection, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Insert title name'
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Insert author name'
        }
      }
    },
    genre: DataTypes.STRING,
    ISBN: DataTypes.STRING
  }

  const BookModel = connection.define('Book', schema)
  return BookModel
}
