import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Dungeon Decipherer</h3>
        <p>Sundered Doctorine</p>
      </header>
      <div className="content">
        <div className="box">
          <h2 className="title">Input</h2>
          <div className="circle-box">
            <div className="circle" />
          </div>
        </div>
        <div className="box">
          <h2 className="title">Solution</h2>
          <div className="circle-box">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
