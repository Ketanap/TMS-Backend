const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const tblClient = conn.define("tblClient", {
    clientid:{type:DataTypes.INTEGER ,allowNull: false, autoIncrement: true , primaryKey:true} ,
    clientname:{type:DataTypes.STRING ,allowNull: false},
    email:{type:DataTypes.STRING,allowNull: false},
    contact:{type:DataTypes.STRING,allowNull:false},
    isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});
module.exports = tblClient;