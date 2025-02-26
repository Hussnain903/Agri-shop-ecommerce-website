import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//REGISTER||METHOD PoST
router.post("/register", registerController);
//LOGIN||POST
router.post("/login", loginController);
//forgot password ||post
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected route  admin auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//orders
router.get("/orders", requireSignIn, getOrdersController);
// all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
//orderstatus update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

//update profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;
