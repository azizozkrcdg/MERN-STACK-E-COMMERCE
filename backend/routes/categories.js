import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// kategori oluştur
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

// tüm kategorileri getir
router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// tek bir kategoriyi getirme
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category Not Found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
