module.exports = (connection, DataTypes) => {
  const schema = {
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
    }
  }

  const AuthorModel = connection.define('Author', schema)
  return AuthorModel
}
