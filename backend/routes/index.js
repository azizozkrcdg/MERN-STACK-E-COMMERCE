import express from "express";
import categoryRoute from "./categories.js";
import productsRoute from "./products.js";

const router = express.Router();

router.use("/categories", categoryRoute);
router.use("/products", productsRoute);

export default router;