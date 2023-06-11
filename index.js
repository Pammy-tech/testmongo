require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log("connected in port 3000");
});
