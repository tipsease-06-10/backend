const express = require("express");
const server = express();
const middlewareConfig = require("../config/middlewares");
const workersRoute = require("./routes/workers");
const usersRoute = require("./routes/users");
middlewareConfig(server);
server.use("/workers", workersRoute);
server.use("/", usersRoute);

module.exports = server;
