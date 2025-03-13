import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { Timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
