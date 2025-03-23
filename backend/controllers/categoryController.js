import Category from "../models/Category.js";

// kategori oluştur
const createCategory = async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

// tüm kategorileri getir
const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// kategori getir
const getCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category Not Found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// kategori güncelle
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;
    const category = await Category.findById(categoryId);

    // kategorinin olup olmadığını kontrol etme
    if (!category) {
      return res.status(404).json({ error: "Category Not Found" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// kategor silme
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category Not Found" });
    }

    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const categoryController = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory
};

export default categoryController;
