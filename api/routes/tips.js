require("dotenv").config();
const express = require("express");
const route = express.Router();
const stripe = require("stripe")("sk_test_CBZoJ9T5ywCuVR0bDzoQZyIg");
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
const stripeCharge = async amount => {
  const charge = await stripe.charges.create({
    amount: amount,
    currency: "usd",
    source: "tok_visa",
    receipt_email: "jenny.rosen@example.com"
  });
  console.log("*******************", charge);
};
route.post("/charge", async (req, res) => {
  const tip = req.body;
  stripeCharge(tip);
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
