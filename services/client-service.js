var conn = require("../services/conn.js");
var Client = require("../models/client.js");
module.exports = {
  getAll: async () => {
    try {
      return await Client.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record Client: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await Client.findOne({
        where: {
          Clientid: id,
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record Client: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await Client.create(data);
    } catch {
      console.error("Failed to update  record Client: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await Client.update(data, { where: { Clientid: id } });
    } catch {
      console.error("Failed to update  record Client: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await Client.update({ isdeleted: true }, { where: { Clientid: id } });
    } catch {
      console.error("Failed to delete  record Client: ", error);
    }
  }
};
