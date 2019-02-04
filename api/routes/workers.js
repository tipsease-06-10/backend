const express = require("express");
const route = express.Router();
const db = require("../../data/dbConfig");

route.get("/", async (req, res) => {
  try {
    const workers = await db("workers");
    res.status(200).json(workers);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const worker = await db("workers").where({ id });
    res.status(200).json(worker[0]);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

route.post("/", async (req, res) => {
  const newWorker = req.body;
  try {
    const result = await db("workers").insert(newWorker);
    res
      .status(201)
      .json({ message: `worker created with the id of ${result}` });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = route;
