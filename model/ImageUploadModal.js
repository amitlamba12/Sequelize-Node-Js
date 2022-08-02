const db = require("../config/db");
const type = require("sequelize/lib/data-types");

const UserImageUpload = db.define("UserImageUpload", {
  id: {
    type: type.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  imageData: {
    type: type.STRING,
  },

  price: {
    type: type.STRING,
  },
  description: {
    type: type.STRING,
  },
  category: {
    type: type.STRING,
  }
});

UserImageUpload.sync()

module.exports = { UserImageUpload };
