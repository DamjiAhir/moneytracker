const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json("test");
});
app.post("/api/transaction", async (req, res) => {
  const { type, amount, discription, date } = req.body;
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.log("fail to connect database", error);
  }
  res.json(req.body);
});

app.listen(4000);
