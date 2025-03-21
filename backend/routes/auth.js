import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role, avatar } = req.body;
    const newUser = await new User({
      username,
      email,
      password,
      role,
      avatar
    });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
