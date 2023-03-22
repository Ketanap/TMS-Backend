var conn = require("../services/conn.js");
var Status = require("../models/taskstatus.js");
module.exports = {
  getAll: async () => {
    try {
      return await Status.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Status: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await Status.findOne({
        where: {
          Statusid: id,
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Status: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await Status.create(data);
    } catch (error){
      console.error("Failed to update  record Status: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await Status.update(data, { where: { statusid: id } });
    } catch (error){
      console.error("Failed to update  record Status: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await Status.update({ isdeleted: true }, { where: { statusid: id } });
    } catch (error){
      console.error("Failed to delete  record Status: ", error);
    }
  },
  
};
