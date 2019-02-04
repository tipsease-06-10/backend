const express = require("express");
const route = express.Router();
const db = require("../../data/dbConfig");
route.get("/", async (req, res) => {
  try {
    const users = await db("users");
    res.json(users);
  } catch (err) {
    res.json({ message: "Internal Server Error" });
  }
});
module.exports = route;
