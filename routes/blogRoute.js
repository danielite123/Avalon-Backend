const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const app = express.Router();

app.post("/", authMiddleware, isAdmin, createBlog);
app.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
app.put("/likes", authMiddleware, liketheBlog);
app.put("/dislikes", authMiddleware, disliketheBlog);

app.put("/:id", authMiddleware, isAdmin, updateBlog);

app.get("/:id", getBlog);
app.get("/", getAllBlogs);

app.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = app;
