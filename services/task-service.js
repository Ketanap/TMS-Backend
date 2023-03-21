var conn = require("../services/conn.js");
var task = require("../models/task.js");
module.exports = {
  getAll: async () => {
    try {
      return await task.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record task: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await task.findOne({
        where: {
          taskid: id,
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record task: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await task.create(data);
    } catch {
      console.error("Failed to update  record task: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await task.update(data, { where: { taskid: id } });
    } catch {
      console.error("Failed to update  record task: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await task.update({ isdeleted: true }, { where: { taskid: id } });
    } catch {
      console.error("Failed to delete  record task: ", error);
    }
  },
  
};
