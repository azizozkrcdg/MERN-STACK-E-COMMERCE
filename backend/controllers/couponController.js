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

const getCoupon = async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      return res.status(404).json({ error: "Kupon bulunamadı!" });
    }

    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

const getAllCoupons = async (req, res) => {
  const coupons = await Coupon.find();

  if (!coupons) {
    return res.status(404).json({ error: "Kupon bulunamadı!" });
  }

  res.status(200).json(coupons);
};

const updateCoupon = async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;
    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      return res.status(404).json({ error: "Kupon bulunamadı!" });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });

    res.status(200).json(updatedCoupon);
  } catch (error) {
    res.status(404).json({ error: "Server error" });
  }
};

const deleteCoupon = async (req, res) => {
  const couponId = req.params.couponId;
  const coupon = await Coupon.findById(couponId);

  if (!coupon) {
    return res.status(404).json({ error: "Kupon bulunamadı!" });
  }

  const deletedCoupon = await Coupon.findByIdAndDelete(coupon);
  res.status(200).json(deletedCoupon);
}

const couponController = {
  createCoupon,
  getCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon
};
export default couponController;
