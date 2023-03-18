const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const User = conn.define("tblroles", {
  roleid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role: { type: DataTypes.STRING, allowNull: false },
});
module.exports = User;
