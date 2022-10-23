module.exports = (connection, DataTypes) => {
  const schema = {
  email: {
    type: DataTypes.STRING,
    isEmail: true
  
  },
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      is: /^[0-9a-z]{8,}$/i
    }
  },
  };

  const ReaderModel = connection.define('Reader', schema);
  return ReaderModel;
};