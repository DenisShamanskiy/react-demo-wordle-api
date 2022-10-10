require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Starting Server on Port ${PORT}`);
});
