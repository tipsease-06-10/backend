const express = require("express");
const server = express();
const middlewareConfig = require("../config/middlewares");
const workersRoute = require("./routes/workers");
middlewareConfig(server);
server.use("/workers", workersRoute);
module.exports = server;
