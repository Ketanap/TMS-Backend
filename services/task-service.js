var conn = require("../services/conn.js");
var Task = require("../models/task.js");
module.exports = {
  getAll: async () => {
    try {
      return await Task.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Task: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await Task.findOne({
        where: {
          taskid: id,
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Task: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await Task.create(data);
    } catch (error){
      console.error("Failed to update  record Task: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await Task.update(data, { where: { taskid: id } });
    } catch (error){
      console.error("Failed to update  record Task: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await Task.update({ isdeleted: true }, { where: { taskid: id } });
    } catch (error){
      console.error("Failed to delete  record Task: ", error);
    }
  },
  
};
