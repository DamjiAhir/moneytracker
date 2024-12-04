import "./App.css";

function App() {
  const rupeeSymbol = String.fromCharCode(0x20b9);
  return (
    <main>
      <h1>{rupeeSymbol} 500</h1>
      <div className="form">
        <form>
          <div className="basic">
            <input type="text" placeholder="Item" />
            <input type="datetime-local" className="date" />
          </div>
          <div className="description">
            <input type="text" placeholder="Description" />
          </div>
          <button type="submit">Add transation</button>
        </form>
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="leftside">
            <h4 className="name">Domain</h4>
            <p className="description">test</p>
          </div>
          <div className="rightside">
            <h4 className="amount-red">-{rupeeSymbol}2200</h4>
            <p className="date">03-12-2024</p>
          </div>
        </div>

        <div className="transaction">
          <div className="leftside">
            <h4 className="name">Dig website</h4>
            <p className="">test</p>
          </div>
          <div className="rightside">
            <h4 className="amount-green">+{rupeeSymbol}10000</h4>
            <p className="  date">03-12-2024</p>
          </div>
        </div>
        <div className="transaction">
          <div className="leftside">
            <h4 className="name"> Pythom cource</h4>
            <p className="">test</p>
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
