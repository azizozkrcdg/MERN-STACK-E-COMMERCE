import Coupon from "../models/Coupon.js";

const createCoupon = async (req, res) => {
  try {
    const coupon = req.body;
    const newCoupon = new Coupon(coupon);
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

const couponController = {createCoupon};
export default couponController;