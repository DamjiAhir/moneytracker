const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Income", "Expense"],
    required: true,
  },
  amount: { type: Number, required: true },

  discription: { type: String, required: true },
  date: { type: Date, required: true },
});

const Transaction = new mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
