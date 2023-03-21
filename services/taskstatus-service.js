var conn = require("../services/conn.js");
var taskstatus = require("../models/taskstatus.js");
module.exports = {
  getAll: async () => {
    try {
      return await taskstatus.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record taskstatus: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await taskstatus.findOne({
        where: {
          taskstatusid: id,
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record taskstatus: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await taskstatus.create(data);
    } catch {
      console.error("Failed to update  record taskstatus: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await taskstatus.update(data, { where: { taskstatusid: id } });
    } catch {
      console.error("Failed to update  record taskstatus: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await taskstatus.update({ isdeleted: true }, { where: { taskstatusid: id } });
    } catch {
      console.error("Failed to delete  record taskstatus: ", error);
    }
  },
  
};
