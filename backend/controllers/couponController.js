import Coupon from "../models/Coupon.js";

// kupon oluştur
const createCoupon = async (req, res) => {
  try {
    const coupon = req.body;
    const {code} = req.body;
    const existingCoupon = await Coupon.findOne({code});
    if(existingCoupon) {
      return res.status(400).json({error: "Böyle bir kupon zaten var."})
    }
    const newCoupon = new Coupon(coupon);
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

// tek bir kuponu getir (ID)
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

// tek bir kuponu getir (CODE)
const getCouponCode = async (req, res) => {
  try {
    const couponCode = req.params.couponCode;
    const coupon = await Coupon.findOne({code: couponCode});

    if (!coupon) {
      return res.status(404).json({ error: "Kupon bulunamadı!" });
    }

    const {discountPer} = coupon;
    res.status(200).json({discountPer});
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

// tüm kuponları getir
const getAllCoupons = async (req, res) => {
  const coupons = await Coupon.find();

  if (!coupons) {
    return res.status(404).json({ error: "Kupon bulunamadı!" });
  }

  res.status(200).json(coupons);
};

// kupon güncelle
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

// kupon sil
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
  getCouponCode,
  getAllCoupons,
  updateCoupon,
  deleteCoupon
};
export default couponController;
