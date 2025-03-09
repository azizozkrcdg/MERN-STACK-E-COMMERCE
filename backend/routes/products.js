import express from "express";

const router = express.Router();

// ürünleri getir
router.get("/", async (req, res) => {
    res.send("Ürünler getirildi");
});

export default router;