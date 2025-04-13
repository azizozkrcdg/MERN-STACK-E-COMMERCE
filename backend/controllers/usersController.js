import User from "../models/User.js";

// kullanıcıları getir
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ error: "Kullanıcı yok!" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

const usersController = { getAllUsers };
export default usersController;
