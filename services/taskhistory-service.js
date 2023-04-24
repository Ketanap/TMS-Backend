var conn = require("../services/conn.js");
var History = require("../models/taskhistory.js");

module.exports = {
  getAll: async () => {
    try {
      const result = await History.findAll({
        where: {
          isdeleted: false,
        },
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
      });
      return result;
    } catch (error) {
      console.error("Failed to Fetch record History: ", error);
      throw error;
    }
  },

  insert: async (changestatus, taskId, taskdate, oldStatusId) => {
    try {
      const data = { changestatus, taskId, taskdate, oldstatusid: oldStatusId };
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
