const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

module.exports = router;
