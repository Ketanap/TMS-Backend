const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const tblTaskHistory = conn.define("tblTaskHistory", {
    historyid:{type:DataTypes.INTEGER ,allowNull: false , autoIncrement: true , primaryKey: true},
    taskid:{type:DataTypes.INTEGER ,allowNull: true, defaultValue: true},
    changedate:{type:DataTypes.STRING,allowNull:true, defaultValue: true},
    fromstatusid:{type:DataTypes.INTEGER ,allowNull: true, defaultValue: true},
    tostatusid:{type:DataTypes.INTEGER ,allowNull: true, defaultValue: true},
    isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});
module.exports = tblTaskHistory;