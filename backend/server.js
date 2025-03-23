import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categories from "./routes/categories.js";
import products from "./routes/products.js";
import users from "./routes/auth.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());

//mongoDB connection
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error)
  }
};

app.use("/api/categories", categories);
app.use("/api/products", products);
app.use("/api/auth", users);

const port = process.env.PORT;
app.listen(port, () => {
  connection();
  console.log(`server is running on port ${port}`);
});
