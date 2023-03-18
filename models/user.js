const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const User = conn.define("tblUsers", {
  userid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  contact: { type: DataTypes.FLOAT, allowNull: true },
  roleid: { type: DataTypes.INTEGER, allowNull: false },
  isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
});
module.exports = User;
