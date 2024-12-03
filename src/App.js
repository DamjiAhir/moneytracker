import "./App.css";

function App() {
  const rupeeSymbol = String.fromCharCode(0x20b9);
  return (
    <main>
      <h1>{rupeeSymbol} 500</h1>
      <div className="form">
        <form>
          <input type="text" />
          <input type="date" />
          <input type="text" />
          <button type="submit">Add transation</button>
        </form>
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="leftside">
            <h4 className="name">a new samsung tv</h4>
            <p className="description">test</p>
          </div>
          <div className="rightside">
            <h3 className="price">{rupeeSymbol} 500</h3>
            <p className="date">03-12-2024</p>
          </div>
        </div>
        <div className="transaction">
          <div className="leftside">
            <h4 className="name">a new samsung tv</h4>
            <p className="description">test</p>
          </div>
          <div className="rightside">
            <h3 className="price">{rupeeSymbol} 500</h3>
            <p className="date">03-12-2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
