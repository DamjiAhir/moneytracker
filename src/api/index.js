const express = require("express");
const cors = require("cors");
require("dotenv").config();
const apiUrl = process.env.REACT_APP_API_URL;
const { default: mongoose } = require("mongoose");
const Transaction = require("../../models/transactionSchema");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json("test");
});
app.post("/api/transaction", async (req, res) => {
  const { type, amount, discription, date } = req.body;
  try {
    await mongoose.connect(apiUrl);
    const transaction = await Transaction.create({
      type,
      amount,
      discription,
      date,
    });
    res.json(transaction);
  } catch (error) {
    console.log("fail to connect database", error);
  }
});

app.get("/api/transactions", async (req, res) => {
  try {
    await mongoose.connect(apiUrl);
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.log("fail to connect database", error);
  }
});

app.listen(4000);
