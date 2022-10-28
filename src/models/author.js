module.exports = (connection, DataTypes) => {
  const schema = {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'We need author name'
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
