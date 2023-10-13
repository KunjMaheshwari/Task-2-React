import "./App.css";

import { useState } from "react";

function App() {
  const [currColor, setCurrColor] = useState("violet");

  const [display, setDisplay] = useState("violet");

  const updateColor = (col) => {
    setCurrColor(col)
    setDisplay(!display)
  }

  return (
    <div className="App">
      {display && (
        <div>
          <button
            style={{ backgroundColor: "violet" }}
            onClick={() => updateColor("violet")}
          ></button>
          <button
            style={{ backgroundColor: "indigo" }}
            onClick={() => updateColor("indigo")}
          ></button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => updateColor("blue")}
          ></button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => updateColor("green")}
          ></button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => updateColor("yellow")}
          ></button>
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => updateColor("orange")}
          ></button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => updateColor("red")}
          ></button>
        </div>
      )}
      <div>
        <button
          style={{ backgroundColor: currColor, width: 200, borderRadius: 32 }}
          onClick={() => {
            setDisplay(!display);
          }}
        >
          Pick me
        </button>
      </div>
    </div>
  );
}

export default App;