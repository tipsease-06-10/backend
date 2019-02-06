const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = server => {
  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  server.use(cors({ credentials: true, origin: true }));
  server.use(express.json());
  server.use(helmet());
  server.use(morgan("short"));
};
