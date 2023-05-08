var conn = require("../services/conn.js");
var History = require("../models/taskhistory.js");
const tblTask = require("../models/task.js");
const tblTaskstatus = require("../models/taskstatus.js");
const tblTaskHistory = require("../models/taskhistory.js");
tblTaskHistory.belongsTo(tblTaskstatus, { foreignKey: "statusid" });
tblTaskHistory.belongsTo(tblTask, { foreignKey: "taskid" });

module.exports = {
  getAll: async () => {
    try {
      const result = await History.findAll({
        where: {
          isdeleted: false,
        },
          include: [
            {
              model: tblTask,
              required: false,
            },
            {
              model: tblTaskstatus,
              required: false,
            },
          ],
          attributes: { exclude: ["id"] },
        
      });
      return result;
    } catch (error) {
      console.error("Failed to Fetch record History: ", error);
      throw error;
    }
  },

  getOne: async (id) => {
    try {
      const result = await History.findOne({
        where: {
          historyid: id,
          isdeleted: false,
        },
          include: [
            {
              model: tblTask,
              required: false,
            },
            {
              model: tblTaskstatus,
              required: false,
            },
          ],
          attributes: { exclude: ["id"] },
       
      });
      return result;
    } catch (error) {
      console.error("Failed to Fetch record History: ", error);
      throw error;
    }
  },

  insert: async (changestatus,  taskId, taskdate, oldStatusId) => {
    try {
      const data = { changestatus, taskid: taskId, changedate: taskdate, fromstatusid: oldStatusId };
      const result = await History.create(data);
      return result;
    } catch (error) {
      console.error("Failed to insert record into History: ", error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      return await History.update(data, { where: { historyid: id } });
    } catch (error) {
      console.error("Failed to update  record History: ", error);
    }
  },

  delete: async (id) => {
    try {
      const result = await History.update(
        { isdeleted: true },
        { where: { historyid: id } }
      );
      return result;
    } catch (error) {
      console.error("Failed to delete record History: ", error);
      throw error;
    }
  },
};
