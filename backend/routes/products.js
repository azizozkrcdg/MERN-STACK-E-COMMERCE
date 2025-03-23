import express from "express";
import productController from "../controllers/productsController.js";

const router = express.Router();

// ürünleri getir
router.route("/").get(productController.getAllProducts);

export default router;