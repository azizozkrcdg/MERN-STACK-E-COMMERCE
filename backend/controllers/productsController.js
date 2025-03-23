import Product from "../models/Product.js";

// tüm ürünleri getir
const getAllProducts = async (req, res) => {
  res.status(200).json("ürünler getirildi");
};

const productController = { getAllProducts };
export default productController
