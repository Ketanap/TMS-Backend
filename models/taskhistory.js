const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const tblTaskHistory = conn.define("tblTaskHistory", {
    historyid:{type:DataTypes.INTEGER ,allowNull: false},
    taskid:{type:DataTypes.INTEGER ,allowNull: false},
    changedate:{type:DataTypes.STRING,allowNull:false},
    fromstatusid:{type:DataTypes.INTEGER ,allowNull: false},
    tostatusid:{type:DataTypes.INTEGER ,allowNull: false},
    isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});
module.exports = tblTaskHistory;