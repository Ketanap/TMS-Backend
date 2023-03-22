var conn = require("../services/conn.js");
var Project = require("../models/project.js");
module.exports = {
  getAll: async () => {
    try {
      return await Project.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Project: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await Project.findOne({
        where: {
          projectid: id,
          isdeleted: false,
        },
      });
    } catch (error){
      console.error("Failed to Fetch  record Project: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await Project.create(data);
    } catch (error){
      console.error("Failed to update  record Project: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await Project.update(data, { where: { projectid: id } });
    } catch (error){
      console.error("Failed to update  record Project: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await Project.update({ isdeleted: true }, { where: { projectid: id } });
    } catch (error){
      console.error("Failed to delete  record Project: ", error);
    }
  },
  };
