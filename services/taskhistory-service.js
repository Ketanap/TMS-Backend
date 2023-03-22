var conn = require("../services/conn.js");
var History = require("../models/taskhistory.js");
module.exports = {
  getAll: async () => {
    try {
      return await History.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch (error) {
      console.error("Failed to Fetch  record History: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await History.findOne({
        where: {
          historyid: id,
          isdeleted: false,
        },
      });
    } catch (error) {
      console.error("Failed to Fetch  record History: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await History.create(data);
    } catch (error) {
      console.error("Failed to update  record History: ", error);
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
      return await History.update({ isdeleted: true }, { where: { historyid: id } });
    } catch (error) {
      console.error("Failed to delete  record History: ", error);
    }
  },
  
};
