const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const User = db.define("User", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING,
  },

  email: {
    type: type.STRING,
  },
  phoneNumber: {
    type: type.STRING,
  },
  address: {
    type: type.STRING,
  },
  password: {
    type: type.STRING,
  },
  confirmpassword: {
    type: type.STRING,
  },
 
  isVerified:{
    type:type.BOOLEAN,
    defaultValue:false
  },

});

User.sync()

module.exports = { User };
