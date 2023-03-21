var conn = require("../services/conn.js");
var taskhistory = require("../models/taskhistory.js");
module.exports = {
  getAll: async () => {
    try {
      return await taskhistory.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record taskhistory: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await taskhistory.findOne({
        where: {
          taskhistoryid: id,
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record taskhistory: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await taskhistory.create(data);
    } catch {
      console.error("Failed to update  record taskhistory: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await taskhistory.update(data, { where: { taskhistoryid: id } });
    } catch {
      console.error("Failed to update  record taskhistory: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await taskhistory.update({ isdeleted: true }, { where: { taskhistoryid: id } });
    } catch {
      console.error("Failed to delete  record taskhistory: ", error);
    }
  },
  
};
