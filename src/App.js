import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const rupeeSymbol = String.fromCharCode(0x20b9);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [discription, setDiscription] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((transactions) => setTransactions(transactions));
  }, [type]);

  async function getTransactions() {
    const uri = process.env.REACT_APP_API_URI + "/transactions";
    const responce = await fetch(uri);
    return await responce.json();
  }

  function addTransaction(e) {
    e.preventDefault();
    const uri = process.env.REACT_APP_API_URI + "/transaction";
    fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, amount, discription, date }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAmount("");
        setDate("");
        setDiscription("");
        setType("");
        console.log("Result:", json);
      })
      .catch((error) => console.error("Error:", error.message));
  }
  let balance = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "Income") {
      balance += transactions[i].amount;
    } else {
      balance -= transactions[i].amount;
    }
  }

  return (
    <main>
      <h1 className={balance < 0 ? "amount-red" : ""}>
        {rupeeSymbol}
        {balance}
      </h1>
      <div className="form">
        <form onSubmit={addTransaction}>
          <div className="basic">
            <select
              className="transactionType"
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="type"
              required
            >
              <option className="option" value="select" disabled selected>
                Select a type
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <input
              type="number"
              placeholder="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <input
              type="datetime-local"
              className="datetime"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="description">
            <input
              type="text"
              placeholder="Description"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add transation</button>
        </form>
      </div>
      <div className="transactions">
        {transactions.length > 0 &&
          transactions
            .map((transactions) => (
              <div className="transaction">
                <div className="leftside">
                  <h3 className="name">{transactions.discription}</h3>
                </div>
                <div className="rightside">
                  <h4
                    className={
                      transactions.type === "Income"
                        ? "amount-green"
                        : "amount-red"
                    }
                  >
                    {transactions.type === "Income" ? "+" : "-"}
                    {rupeeSymbol}
                    {transactions.amount}
                  </h4>
                  <p className="date">{transactions.date}</p>
                </div>
              </div>
            ))
            .reverse()}
      </div>
    </main>
  );
}

export default App;
