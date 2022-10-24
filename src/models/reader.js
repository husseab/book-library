module.exports = (connection, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      isEmail: true

    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 40],
          msg: 'The password length should be between 8 and 40 characters.'
        }
      }
    }
  }

  const ReaderModel = connection.define('Reader', schema)
  return ReaderModel
}
