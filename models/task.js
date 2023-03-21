const { DataTypes } = require("sequelize");
var conn = require("../services/conn.js");

const tblTask = conn.define("tblTasks", {
    taskid:{type:DataTypes.INTEGER ,allowNull: false},
    Taskdate:{type:DataTypes.STRING ,allowNull:false },
    userid:{type:DataTypes.INTEGER, allowNull:false},
    projectid:{type:DataTypes.INTEGER, allowNull:false},
    statusid:{type:DataTypes.INTEGER, allowNull:false},
    expectedtime:{type:DataTypes.INTEGER, allowNull:false},
    actualtime:{type:DataTypes.INTEGER, allowNull:false},
    duedate:{type:DataTypes.STRING, allowNull:false},
    completeddate:{type:DataTypes.STRING , allowNull:false},
    isdeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});
    

module.exports = tblTask;