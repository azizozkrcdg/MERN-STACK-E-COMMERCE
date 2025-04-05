import mongoose from "mongoose";

const CouponSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    discountPer: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
export default Coupon;
