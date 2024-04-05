import logo from "./logo.svg";
import "./App.css";
import Content from "./content";

function App() {
  const [counter, setCounter] = [1];

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p onClick={() => setCounter(counter + 1)}>{counter}</p> */}
        <button onClick={handleCounter}>{counter}</button>

        <Content />
      </header>
    </div>
  );
}

export default App;
