import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// kullanıcı kayıt işlemi
router.route("/register").post(authController.createUser);

// kullanıcı giriş kontrolü login işlemi
router.route("/login").post(authController.loginUser);


export default router;
