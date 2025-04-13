import bcrypt from "bcryptjs";
import User from "../models/User.js";

// avatar oluşturma
const generateAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/150?img=${randomAvatar}`;
};

// kullanıcı kayıt işlemi
const createUser = async (req, res) => {
  try {
    const { username, email, password, role, avatar } = req.body;
    const defaultAvatar = generateAvatar(); //generateAvatar fonksiyonunu çağır
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
      avatar: defaultAvatar,
    });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// kullanıcı giriş işlemi
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // kullanıcı olup olmadığı kontrolü
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Geçersiz email ya da şifre" });
    }

    // parola kontrolü
    const isPasswordTrue = await bcrypt.compare(password, user.password);
    if (!isPasswordTrue) {
      return res.status(401).json({ message: "Geçersiz email ya da şifre" });
    }

    res.status(200).json({
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const authController = { createUser, loginUser };
export default authController;