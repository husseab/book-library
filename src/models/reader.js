module.exports = (connection, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'The email is in incorrect format.'
        }
      }
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
