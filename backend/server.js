import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mainRoute from "./routes/index.js";
const app = express();

dotenv.config();
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

app.use("/api", mainRoute);

const port = 5000;
app.listen(port, () => {
    connection();
  console.log(`server is running on port ${port}`);
});
