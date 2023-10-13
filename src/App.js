import { useState } from "react";
import "./App.css";

function App() {
  const [PrimaryValues, setPrimaryValues] = useState(null);
  const [SecondaryValues, setSecondaryValues] = useState(null);
  const [operator, setOperator] = useState(null)

  const valueClick = (value) => {
    console.log(value);
    setPrimaryValues((val) => {
      if (val === null) {
        return value;
      } else {
        return val * 10 + value;
      }
    });
  };

  const onOperator = (op) => {
    setSecondaryValues(PrimaryValues)
    setOperator(op)
    setPrimaryValues(null)
  }

  const calculate = () => {
    if (operator === '+') {
      setPrimaryValues(SecondaryValues + PrimaryValues)
    } else if (operator === 'X') {
      setPrimaryValues(SecondaryValues * PrimaryValues)
    } else if (operator === '%') {
      setPrimaryValues(SecondaryValues % PrimaryValues)
    } else if (operator === '^') {
      setPrimaryValues(SecondaryValues ** PrimaryValues)
    }
    setSecondaryValues(null)
    setOperator(null)
  }

  return (
    <div className="App">
      <div className="result2">{SecondaryValues ? SecondaryValues : ""}</div>
      <div className="resultop">{operator ? operator : ""}</div>
      <div className="result">{PrimaryValues ? PrimaryValues : ""}</div>
      <div className="buttonContainer">
        <button onClick={() => valueClick(7)}>7</button>
        <button onClick={() => valueClick(8)}>8</button>
        <button onClick={() => valueClick(9)}>9</button>
        <button
          onClick={() => {
            setPrimaryValues((val) => {
              if (val) {
                return parseInt(val / 10);
              } else {
                return null;
              }
            });
          }}
        >
          Back
        </button>
        <button onClick={() => valueClick(4)}>4</button>
        <button onClick={() => valueClick(5)}>5</button>
        <button onClick={() => valueClick(6)}>6</button>
        <button onClick={()=> onOperator('%')} >%</button>
        <button onClick={() => valueClick(1)}>1</button>
        <button onClick={() => valueClick(2)}>2</button>
        <button onClick={() => valueClick(3)}>3</button>
        <button onClick={()=> onOperator('X')} >X</button>
        <button
          onClick={() => valueClick(0)}
          style={{ borderBottomLeftRadius: 32 }}
        >
          0
        </button>
        <button onClick={()=> onOperator('^')} >^</button>
        <button onClick={calculate} >=</button>
        <button onClick={()=> onOperator('+')}  style={{ borderBottomRightRadius: 32 }}>+</button>
      </div>
    </div>
  );
}

export default App;