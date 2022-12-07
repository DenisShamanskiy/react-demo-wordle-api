require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/index.js");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 3002;

const app = express();

// const whitelist = process.env.CLIENT_URL_LIST.split(",").map((origin) =>
//   origin.trim()
// );

// const corsOptions = {
//   credentials: true,
//   origin: (origin, callback) => {
//     whitelist.includes(origin)
//       ? callback(null, true)
//       : callback(new Error("Not allowed by CORS"));
//   },
// };

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use("/api", router);
app.use(errorMiddleware);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Starting Server on Port ${PORT}`);
});
