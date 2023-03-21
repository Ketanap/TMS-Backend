var conn = require("../services/conn.js");
var project = require("../models/project.js");
module.exports = {
  getAll: async () => {
    try {
      return await project.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record project: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await project.findOne({
        where: {
          projectid: id,
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record project: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await project.create(data);
    } catch {
      console.error("Failed to update  record project: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await project.update(data, { where: { projectid: id } });
    } catch {
      console.error("Failed to update  record project: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await project.update({ isdeleted: true }, { where: { projectid: id } });
    } catch {
      console.error("Failed to delete  record project: ", error);
    }
  },
  };
