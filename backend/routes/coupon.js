import express from "express";
import couponController from "../controllers/couponController.js";

const router = express.Router();

router.route("/").post(couponController.createCoupon);
router.route("/:couponId").get(couponController.getCoupon);
router.route("/").get(couponController.getAllCoupons);
router.route("/:couponId").put(couponController.updateCoupon);
router.route("/:couponId").delete(couponController.deleteCoupon);

export default router;