const express = require("express");
const {
  createCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const app = express.Router();

app.post("/", authMiddleware, isAdmin, createCoupon);
app.get("/:id", authMiddleware, isAdmin, getAllCoupon);
app.put("/:id", authMiddleware, isAdmin, updateCoupon);
app.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = app;
