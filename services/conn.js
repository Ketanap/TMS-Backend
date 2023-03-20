const { Sequelize } = require("sequelize");
var env = require("dotenv");
env.config();
const conn = new Sequelize(
  process.env.DATABASE,
  "root",
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.ENGINE,
  }
);

conn
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
module.exports = conn;
