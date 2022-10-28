module.exports = (connection, DataTypes) => {
  const schema = {
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'We need a genre name'
        },
        notEmpty: {
          args: true,
          msg: 'Insert genre name'
        }
      }
    }
  }
  const GenreModel = connection.define('Genre', schema)
  return GenreModel
}
