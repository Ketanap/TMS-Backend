var conn = require("../services/conn.js");
var Task = require("../models/task.js");
const tblTaskstatus = require("../models/taskstatus.js");
const User = require("../models/user.js");
const tblProject = require("../models/project.js");
const tblTask = require("../models/task.js");
tblTask.belongsTo(tblTaskstatus, { foreignKey: "statusid" });
tblTask.belongsTo(User, { foreignKey: "userid" });
tblTask.belongsTo(tblProject, { foreignKey: "projectid" });
module.exports = {
  getAll: async () => {
    try {
      return await Task.findAll({
        where: {
          isdeleted: false,
        },
        include: [
          {
            model: User,
            required: false,
          },
          {
            model: tblTaskstatus,
            required: false,
          },
          {
            model: tblProject,
            required: false,
          },
        ],
        attributes: { exclude: ["id"] },
      });
    } catch (error) {
      console.error("Failed to Fetch  record Task: ", error);
    }
  },
  getAllByUserId: async (userId) => {
    try {
      return await Task.findAll({ 
        where:{
          userid : userId,
          isdeleted: false,
        },
        include: [
          {
            model: User,
            required: false,
          },
          {
            model: tblTaskstatus,
            required: false,
          },
          {
            model: tblProject,
            required: false,
          },
        ],
        attributes: { exclude: ["id"] },
      });
    } catch (error) {
      console.error("Failed to Fetch record Task: ", error);
    }
  },
  
  
  getOne: async (id) => {
    try {
      return await Task.findOne({
        where: {
          taskid: id,
          isdeleted: false,
        }, include: [
          {
            model: User,
            required: false,
          },
          {
            model: tblTaskstatus,
            required: false,
          },
          {
            model: tblProject,
            required: false,
          },
        ],
        attributes: { exclude: ["id"] },
      });
    } catch (error) {
      console.error("Failed to Fetch  record Task: ", error);
    }
  },
  
  insert: async (data) => {
    try {
      return await Task.create(data);
    } catch (error) {
      console.error("Failed to update  record Task: ", error);
    }
  },
  update: async (id, data, oldstatusid, newstatusid, currentdate) => {
    try {
      const task = await Task.findOne({ where: { taskid: id } });
      const oldStatusId = task.statusid;
  
      return await Task.update(
        {
          ...data,
          oldstatusid:  newstatusid, 
          updatedate: currentdate,
        },
        { where: { taskid: id } }
      );
    } catch (error) {
      console.error("Failed to update record Task: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await Task.update({ isdeleted: true }, { where: { taskid: id } });
    } catch (error) {
      console.error("Failed to delete  record Task: ", error);
    }
  },
};
