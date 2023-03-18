var conn = require("../services/conn.js");
var User = require("../models/user.js");
module.exports = {
  getAll: async () => {
    try {
      return await User.findAll({
        where: {
          isdeleted: false,
        },
      });
    } catch {
      console.error("Failed to Fetch  record User: ", error);
    }
  },
  getOne: async (id) => {
    try {
      return await User.findOne({
        where: {
          userid: id,
        },
      });
    } catch {
      console.error("Failed to Fetch  record User: ", error);
    }
  },
  insert: async (data) => {
    try {
      return await User.create(data);
    } catch {
      console.error("Failed to update  record User: ", error);
    }
  },
  update: async (id, data) => {
    try {
      return await User.update(data, { where: { userid: id } });
    } catch {
      console.error("Failed to update  record User: ", error);
    }
  },
  delete: async (id) => {
    try {
      return await User.update({ isdeleted: true }, { where: { userid: id } });
    } catch {
      console.error("Failed to delete  record User: ", error);
    }
  },
  login: async (email, pass) => {
    return await User.findOne({
      where: {
        email: email,
        password: pass,
      },
    });
  },
};
