const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/blogCatCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const app = express.Router();

app.post("/", authMiddleware, isAdmin, createCategory);
app.put("/:id", authMiddleware, isAdmin, updateCategory);
app.delete("/:id", authMiddleware, isAdmin, deleteCategory);
app.get("/:id", getCategory);
app.get("/", getallCategory);

module.exports = app;
