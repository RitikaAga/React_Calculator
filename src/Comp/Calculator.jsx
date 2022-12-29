
import React, { useState } from "react";
import './Calculator.css';

function Calculator() {
  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState("");
  const createDigit = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) { 
      digit.push(<button onClick={() => { updateCalculation(i.toString()); }}>{i}</button>)
    }
    return digit;
  }


  // calculation Method
  const action = ["+", "-", "/", "*", ".","%"];
  const updateCalculation = (value) => { 
    if (action.includes(value) && calculation === "") { 
      return;
    }
    setCalculation(calculation + value);
    if (!action.includes(value)) { 
      setOutput(eval(calculation + value).toString());
    }
  }

  const Calculate = () => { 
    setCalculation(eval(calculation).toString());
  }
  const Reset = () => { 
    setCalculation("");
    setOutput("");
  }

  const back = () => {
    setCalculation(calculation.slice(0, -1));
  }
function percentage()
{
  setCalculation((calculation/100));
}

  return (
    <>
     <h1>Calculator</h1>    
      <div className="Container">
        {/* input and output Part */}

        <div className='output'> {calculation}<br></br>{output ?<span>{output}</span>:""} </div>
       
        { /* Buttons  */}
 <div className= "digit_div">
        <div className="btn-up">
             <button className="top_button" onClick={ Reset}>AC</button>
          <button className="top_button" onClick={percentage}>%</button>
          <button className="top_button" onClick={back}>Back</button>
        <button  className="top_button" onClick={() => { updateCalculation("/") }}>/</button></div>
        
       
          <div className="digit">{createDigit()}</div>

          <div className='btn2'>  
       <button className='side-btn' onClick={() => { updateCalculation("*") }} >*</button>
        <button  className='side-btn' onClick={() => {updateCalculation("-")}} >-</button>
            <button  className='side-btn plus'  onClick={() => { updateCalculation("+")  }}>+</button>
         
               </div>
        </div>
        

        <div className="Bottom">
          <button className="Bottom-btn" onClick={() => {updateCalculation("00") }}>00</button>
        <button className="Bottom-btn" onClick={() => {updateCalculation("0") }}>0</button>
          <button className="Bottom-btn" onClick={() => { updateCalculation(".") }}><strong>.</strong></button>
             <button  className='Bottom-btn equal' onClick={() => {Calculate("=") }}><b>=</b></button>
        </div>
        

      </div>
    </>
    );
}

export default Calculator;