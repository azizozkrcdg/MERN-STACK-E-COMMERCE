import mongoose from "mongoose";

const ReviewsSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: true,
  },
  colors: [
    {
      type: String,
      required: true,
    },
  ],
  size: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    current: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: [
      {
        type: String,
        required: true,
      },
    ],
    reviews: [ReviewsSchema],
  },
  { Timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
