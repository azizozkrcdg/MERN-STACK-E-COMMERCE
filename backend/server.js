import express from "express";
import mongoose from "mongoose";

const app = express();

const connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://azz:BVvsDEucfMqAqVdu@e-commerce.yzmra.mongodb.net/");
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

app.get("/", (req, res) => {
  res.send("homepage");
});

const port = 5000;
app.listen(port, () => {
    connection();
  console.log(`server is running on port ${port}`);
});
