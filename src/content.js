import logo from "./logo.svg";
import "./App.css";

function Content() {
  const [counter, setCounter] = [1];

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return <div className="Conter">content</div>;
}

export default Content;
