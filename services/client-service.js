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
    } catch (error){
      console.error("Failed to Fetch  record Client: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await Client.findOne({
        where: {
          clientid: id,
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Client: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await Client.create(data);
    } catch (error){
      console.error("Failed to update  record Client: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await Client.update(data, { where: { clientid: id } });
    } catch (error){
      console.error("Failed to update  record Client: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await Client.update({ isdeleted: true }, { where: { clientid: id } });
    } catch (error){
      console.error("Failed to delete  record Client: ", error);
    }
  }
};
