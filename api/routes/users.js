const express = require("express");
const route = express.Router();
const db = require("../../data/dbConfig");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../common/auth");

route.post("/login", async (req, res) => {
  const credentials = req.body;
  try {
    const user = await db("users")
      .where({ username: credentials.username })
      .first();
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
      const token = await generateToken(user);
      res.status(200).json({
        userId: `${user.id}`,
        username: `${user.username}`,
        user_type: `${user.user_type}`,
        token
      });
    } else {
      res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (err) {
    res.json({ message: "Internal Server Error", err: err });
  }
});
route.post("/register", async (req, res) => {
  const credentials = req.body;
  try {
    const user = await db("users")
      .where({ username: credentials.username })
      .first();
    if (user) {
      res.status(400).json({
        message: `username: ${
          user.username
        } already exists, please choose another username`
      });
    } else {
      const hash = bcrypt.hashSync(credentials.password);
      credentials.password = hash;
      const userId = await db("users").insert(credentials);
      res
        .status(201)
        .json({ message: `User with the id ${userId} has been created` });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err: err });
  }
});

module.exports = route;
