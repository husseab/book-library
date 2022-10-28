module.exports = (connection, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'We need a book title'
        },
        notEmpty: {
          args: true,
          msg: 'Insert title name'
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'We need a book author'
        },
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
