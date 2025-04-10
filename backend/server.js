import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categories from "./routes/categories.js";
import products from "./routes/products.js";
import users from "./routes/auth.js";
import coupon from "./routes/coupon.js";
import connection from "./config/db.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categories);
app.use("/api/products", products);
app.use("/api/auth", users);
app.use("/api/coupons", coupon);

const port = process.env.PORT;
app.listen(port, () => {
  connection();
  console.log(`server is running on port ${port}`);
});
