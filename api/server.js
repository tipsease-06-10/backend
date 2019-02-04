const express = require("express");
const server = express();
const middlewareConfig = require("../config/middlewares");

middlewareConfig(server);

module.exports = server;
