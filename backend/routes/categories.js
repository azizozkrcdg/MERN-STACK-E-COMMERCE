import express from "express";

const router = express.Router();

// kategorileri getir
router.get("/", async (req, res) => {
    res.send("Kategoriler getirildi");
});

export default router;