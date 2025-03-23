import express from "express";
import categoryController from "../controllers/categoryController.js";


const router = express.Router();

// kategori oluştur
router.route("/").post(categoryController.createCategory);

// tüm kategorileri getir
router.route("/").get(categoryController.getAllCategories);

// tek bir kategoriyi getirme
router.route("/:categoryId").get(categoryController.getCategory);

// Kategori güncelle
router.route("/:categoryId").put(categoryController.updateCategory);

// kategori silme
router.route("/:categoryId").delete(categoryController.deleteCategory);

export default router;
