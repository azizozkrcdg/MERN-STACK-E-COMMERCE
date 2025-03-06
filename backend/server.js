import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("homepage");
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
