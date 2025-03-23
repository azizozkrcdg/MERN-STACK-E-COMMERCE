import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// random avatar oluşturma
const generateAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/150?img=${randomAvatar}`;
};

// kullanıcı kayıt işlemi
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role, avatar } = req.body;
    const defaulAvatar = generateAvatar();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Böyle bir kullanıcı zaten var" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      role,
      avatar : defaulAvatar,
    });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
