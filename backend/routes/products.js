import express from "express";
import productController from "../controllers/productsController.js";

const router = express.Router();

// ürünleri getir
router.route("/").post(productController.createProduct);
router.route("/").get(productController.getAllProducts);
router.route("/:productId").get(productController.getProduct);
router.route("/:productId").put(productController.updateProduct);
router.route("/:productId").delete(productController.deleteProduct);

export default router;