import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mainRoute from "./routes/index.js";

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

app.use("/api", mainRoute);

const port = process.env.PORT;
app.listen(port, () => {
  connection();
  console.log(`server is running on port ${port}`);
});
