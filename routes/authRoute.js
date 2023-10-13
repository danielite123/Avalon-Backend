const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWhishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  updateOrderStatus,
  getAllOrders,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const app = express.Router();

app.post("/register", createUser);
app.post("/forgot-password-token", forgotPasswordToken);
app.put("/reset-password/:token", resetPassword);

app.put("/password", authMiddleware, updatePassword);
app.post("/login", loginUserCtrl);
app.post("/admin-login", loginAdmin);
app.post("/cart", authMiddleware, userCart);
app.post("/cart/applycoupon", authMiddleware, applyCoupon);
app.post("/cart/cash-order", authMiddleware, createOrder);
app.get("/all-users", getallUser);
app.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
app.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);
app.get("/refresh", handleRefreshToken);
app.get("/logout", logout);
app.get("/wishlist", authMiddleware, getWhishlist);
app.get("/cart", authMiddleware, getUserCart);

app.get("/:id", authMiddleware, isAdmin, getaUser);
app.delete("/empty-cart", authMiddleware, emptyCart);
app.delete("/:id", deleteaUser);
app.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

app.put("/edit-user", authMiddleware, updatedUser);
app.put("/save-address", authMiddleware, saveAddress);
app.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
app.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = app;
