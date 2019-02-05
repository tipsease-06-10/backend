const express = require("express");
const route = express.Router();

const db = require("../../data/dbConfig");

route.get("/", async (req, res) => {
  try {
    const tips = await db("tips");

    res.status(200).json(tips);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tip = await db("tips")
      .where({ id })
      .first();
    res.status(200).json(tip);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

route.post("/", async (req, res) => {
  const newTip = req.body;

  try {
    const result = await db("tips").insert(newTip);
    res.status(201).json({ message: `tip created with the id of ${result}` });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});
module.exports = route;
