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
    app.use("/taskhistory", taskHistoryRoute);
    app.use("/taskstatus", taskStatusRoute);
    app.use("/project", projectRoute);
  },
};
