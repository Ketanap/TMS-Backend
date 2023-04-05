const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const tblProject = conn.define("tblProject", {
    projectid:{type:DataTypes.INTEGER ,allowNull: false , autoIncrement: true , primaryKey:true},
    projectname:{type:DataTypes.STRING ,allowNull: false},
    clientid:{type:DataTypes.INTEGER ,allowNull: false},
    isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});
module.exports = tblProject;