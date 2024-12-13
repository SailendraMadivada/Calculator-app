import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Function to handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to evaluate the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput("");
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button className="button" onClick={() => handleClear()}>
          AC
        </button>
        <button className="button" onClick={() => handleBackspace()}>
          &larr;
        </button>
        <button className="button" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="button" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="button" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="button" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="button" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="button" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="button" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="button" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="button" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="button" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="button" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="button" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="button" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="button" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="button" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="button equal" onClick={handleEvaluate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
