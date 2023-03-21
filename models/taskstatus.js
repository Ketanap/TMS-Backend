const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const Taskstatus = conn.define("tblTaskstatus", {
    statusid:{type:DataTypes.INTEGER ,allowNull: false},
    statusname:{type:DataTypes.STRING,allowNull:false},
    type:{type:DataTypes.STRING,allowNull:false},
    isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    
});
module.exports = Taskstatus;