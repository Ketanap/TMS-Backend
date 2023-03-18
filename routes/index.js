var userRoute = require("./user-route.js");
var clientRoute = require("./client-route.js");
var taskRoute = require("./task-route.js");
var taskHistoryRoute = require("./taskhistory-route.js");
var taskStatusRoute = require("./taskstatus-route.js");
var projectRoute = require("./project-route.js");

module.exports = {
  init: (app) => {
    app.use("/user", userRoute);
    app.use("/client", clientRoute);
    app.use("/task", taskRoute);
    app.use("/task-history", taskHistoryRoute);
    app.use("/task-status", taskStatusRoute);
    app.use("/project", projectRoute);
  },
};
