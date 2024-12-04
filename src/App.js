import { useState } from "react";
import "./App.css";

function App() {
  const rupeeSymbol = String.fromCharCode(0x20b9);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [discription, setDiscription] = useState("");
  function addTransaction(e) {
    e.preventDefault();
    const uri = process.env.REACT_APP_API_URI + "/transaction";
    fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, amount, discription, date }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log("Result:", json))
      .catch((error) => console.error("Error:", error.message));
  }

  return (
    <main>
      <h1>{rupeeSymbol} 500</h1>
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
              type="text"
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
        <div className="transaction">
          <div className="leftside">
            <h4 className="name">Domain</h4>
          </div>
          <div className="rightside">
            <h4 className="amount-red">-{rupeeSymbol}2200</h4>
            <p className="date">03-12-2024</p>
          </div>
        </div>

        <div className="transaction">
          <div className="leftside">
            <h4 className="name">Dig website</h4>
          </div>
          <div className="rightside">
            <h4 className="amount-green">+{rupeeSymbol}10000</h4>
            <p className="  date">03-12-2024</p>
          </div>
        </div>
        <div className="transaction">
          <div className="leftside">
            <h4 className="name"> Pythom cource</h4>
          </div>
          <div className="rightside">
            <h4 className="amount-red">- {rupeeSymbol}15000</h4>
            <p className=" date">03-12-2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
