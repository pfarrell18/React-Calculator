import React, { useState, useEffect } from 'react';
import './App.css';
import Key from "./Key"
import OperatorKey from "./OperatorKey"

function App() {

  const [value, setValue] = useState("")
  const [arithmetic, setArithmetic] = useState([])
  const [results, setResults] = useState(undefined)
  const [operation, setOperation] = useState("")

  useEffect(() => {

  }, [])
  const clear = () => {
    setValue("")
    setArithmetic([])
    setResults("")
    setOperation("")
  }

  const addNumber = (number) => {
    let new_value = value + operation + number
    setOperation("")
    setArithmetic(arithmetic => [...arithmetic, number])
    setValue(new_value)
  }

  const updateOperations = (value) => {
    setArithmetic(arithmetic => [...arithmetic, value])
    setOperation(value)

  }

  const saveResults = () => {
    setValue(results)
    setArithmetic(arithmetic => [...arithmetic, results])
    setResults(undefined)
  }
  const operate = (num1, num2, operator) => {

    if (operator === "/") {
      return (num1 / num2)
    }
    if (operator === "X") {
      return (num1 * num2)
    }
    if (operator === "-") {
      return (num1 - num2)
    }
    if (operator === "+") {
      return (num1 + num2)
    }
  }
  const Calculate = () => {
    let numstoCombine = []
    let combined_1 = []
    let operator = null
    let combined_2 = []

    for (let i = 0; i < arithmetic.length; i++) {
      console.log("***************************")

      if (i === arithmetic.length - 1) {
        numstoCombine.push(arithmetic[i])
        combined_2 = Number(numstoCombine.join(""))
        combined_1 = operate(combined_1, combined_2, operator)
        setResults(combined_1)
        setArithmetic([])
        setValue([])
      }
      if ((typeof arithmetic[i]) === "number") {
        numstoCombine.push(arithmetic[i])
      } else {
        if (combined_1.length === 0) {
          combined_1 = Number(numstoCombine.join(""))
          numstoCombine = []
          operator = arithmetic[i]
        } else if (combined_2.length === 0) {
          combined_2 = Number(numstoCombine.join(""))
          numstoCombine = []
          if (operator && combined_1.length !== 0 && combined_2.length !== 0) {
            combined_1 = operate(combined_1, combined_2, operator)
            combined_2 = []
            operator = arithmetic[i]
          }
        }
      }
    }

  }

  return (

    <div className="frame">
      <div className="content">
      
        <h3 className="header">React Calculator</h3>
        <div className="inputs">{value}</div>
        <div className="results">
          <div>{results}</div>
          {results && <div><button className="useresults" onClick={() => { saveResults() }}>Use!</button></div>}
        </div>
        <div className="keys">
          <Key number={"÷"} className="operator" handleClick={() => updateOperations("/")} />
          <Key number={7} handleClick={() => { addNumber(7) }} />
          <Key number={8} handleClick={() => { addNumber(8) }} />
          <Key number={9} handleClick={() => { addNumber(9) }} />
        </div>
        <div className="keys">
          <Key number={"X"} className="operator" handleClick={() => updateOperations("X")} />
          <Key number={4} handleClick={() => { addNumber(4) }} />
          <Key number={5} handleClick={() => { addNumber(5) }} />
          <Key number={6} handleClick={() => { addNumber(6) }} />
        </div>
        <div className="keys">
          <Key number={"-"} className="operator" handleClick={() => updateOperations("-")} />
          <Key number={1} handleClick={() => { addNumber(1) }} />
          <Key number={2} handleClick={() => { addNumber(2) }} />
          <Key number={3} handleClick={() => { addNumber(3) }} />
        </div>
        <div className="keys">
          <Key number={"+"} className="operator" handleClick={() => updateOperations("+")} />
          <Key number={"C"} className="clear" handleClick={() => clear()} />
          <Key number={0} handleClick={() => { addNumber(0) }} />
          <Key number={"="} className="equal" handleClick={() => { Calculate() }} />
        </div>
      </div>
    </div>
  );
}

export default App;
