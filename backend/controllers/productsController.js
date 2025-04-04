import Product from "../models/Product.js";

// ürün oluşturma
const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// tüm ürünleri getir
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// sadece bir ürün getir
const getProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Server error" });
  }
};

const productController = {createProduct, getAllProducts, getProduct };
export default productController;
