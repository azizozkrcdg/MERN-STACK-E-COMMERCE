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
    if (!product) {
      return res.status(404).json({ error: "Ürün bulunamadı!" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

// ürün güncelle
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).json({ message: "Böyle bir ürün yok!" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updates,
      { new: true } //ürünün güncellenmiş halini döndürür
    );
    res.status(200).json({ updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// ürün sil
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Ürün bulunamadı!" });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const productController = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
export default productController;
