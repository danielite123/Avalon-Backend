const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

const app = express.Router();

app.post("/", authMiddleware, isAdmin, createProduct);

app.get("/:id", getaProduct);
app.put("/wishlist", authMiddleware, addToWishlist);
app.put("/rating", authMiddleware, rating);

app.put("/:id", authMiddleware, isAdmin, updateProduct);
app.delete("/:id", authMiddleware, isAdmin, deleteProduct);

app.get("/", getAllProduct);

module.exports = app;
