import express from "express";
import couponController from "../controllers/couponController.js";

const router = express.Router();

router.route("/").post(couponController.createCoupon);

export default router;