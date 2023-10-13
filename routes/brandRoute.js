const express = require("express");
const {
  createBrand,
  getBrand,
  getallBrand,
  updateBrand,
  deleteBrand,
} = require("../controller/brandCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const app = express.Router();

app.post("/", authMiddleware, isAdmin, createBrand);
app.get("/:id", getBrand);
app.put("/:id", authMiddleware, isAdmin, updateBrand);
app.delete("/:id", authMiddleware, isAdmin, deleteBrand);
app.get("/", getallBrand);

module.exports = app;
