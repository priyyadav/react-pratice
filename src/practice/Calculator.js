import React, { useState } from 'react';
import './calculator.css';

export const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [value, setvalue]=useState('')
  const [count, setcount]=useState('')
  const [first, setfrst]=useState(true)
  const [toggle, settoggle]=useState(true)
  const [sqrt, setsqrt]=useState(true)
  const clearHandler = () => {
    setDisplay(' ');
    setcount(' ');
  };

  const deleteHandler = () => {
    setDisplay(display.slice(0, -1));
    setcount(count.slice(0,-1))
  };

  const clickHandler = (value) => {
    console.log(display,"data")
    let lastChar;

    if(display.includes('**') || display.includes('^2'))
    {
    lastChar=display.slice(-2);
    setfrst(true);
    setsqrt(true)
    }
    else{
      lastChar = display.slice(-1);
     
    }
    if(!isNaN(value) && !isNaN(lastChar))
    {
     
      console.log("value nad last are numeber")
      setDisplay((prevDisplay) => prevDisplay+ value);
      setcount((prevDisplay) => prevDisplay+ value);
    }
    
    else if (isNaN(value) && !isNaN(lastChar))
    {
      console.log("value are number nad last are charte")
      setDisplay((prevDisplay) => prevDisplay+ value);
      setcount((prevDisplay) => prevDisplay+ value);
    }
    else if (!isNaN(value) && isNaN(lastChar))
    {
      setDisplay((prevDisplay) => prevDisplay+ value);
      setcount((prevDisplay) => prevDisplay+ value); 
    }
    else if (isNaN(value) && isNaN(lastChar))
    {
      console.log(display,"k")
      console.log("value are char nad last are charte")
      setDisplay((prevDisplay) => prevDisplay.replace(lastChar,value));
      setcount((prevDisplay) => prevDisplay.replace(lastChar,value)); 
    }

    }


  const sqaureHandler=()=>
  {

    let lastChar;
  
    if(display.includes('**'))
    {
    lastChar=display.slice(-2);
   
    }
    else{
      lastChar = display.slice(-1);
     
    }

    if(first && isNaN(lastChar))
    {

      setDisplay((prevDisplay) => prevDisplay.replace(lastChar,'^'+'2'));
      setcount((prevDisplay) => prevDisplay.replace(lastChar,  "**2")); 
      setfrst(false)
    }
    else if(first){
      setDisplay((prev)=>prev+'^'+'2')
      setcount((prevDisplay) => prevDisplay + "**2");
      setfrst(false)
    }
    
  }
  
  const toggleHandler = () => {
    if (toggle) {
      setDisplay((prev) => '-' + prev);
      setcount((prevDisplay) => '-' + prevDisplay);
      settoggle(false);
    } else {
      
      setDisplay((prev) => prev.replace('-', ''));
      setcount((prevDisplay) => prevDisplay.replace('-', ''));
      settoggle(true);
    }
  };

  const sqrtHandler = () => {
    if(sqrt)
    {
    setDisplay((prev) => prev + '√');
    setcount((prevCount) => `Math.sqrt(${prevCount})`);
    setsqrt(false)
    }

  };

  const calculateResult = () => {
    try{
      const result = eval(count);
      setDisplay('  ');
      setcount(' ')

      setvalue(result.toString());
    
      
      setfrst(true);
      setsqrt(true)
    }
    catch
    {
      setvalue("NAN");
      setDisplay('NAN');
    }
      
    
  };

  return (
    <>
      <div className="calculator">
        <div className='input'>
          <input value={display} readOnly />
          <p>{value}</p>
        </div>
        <button onClick={clearHandler}>Clear</button>
        <button onClick={deleteHandler}>Del</button>
        <button onClick={() => toggleHandler('+/-')}>+/-</button>
        <button onClick={() => sqaureHandler()}>x<sup>2</sup></button>
        <br />
        <button onClick={() => clickHandler('1')}>1</button>
        <button onClick={() => clickHandler('2')}>2</button>
        <button onClick={() => clickHandler('3')}>3</button>
        <button onClick={() => clickHandler('+')}>+</button>
        <br />
        <button onClick={() => clickHandler('4')}>4</button>
        <button onClick={() => clickHandler('5')}>5</button>
        <button onClick={() => clickHandler('6')}>6</button>
        <button onClick={() => clickHandler('/')}>/</button>
        <br />
        <button onClick={() => clickHandler('7')}>7</button>
        <button onClick={() => clickHandler('8')}>8</button>
        <button onClick={() => clickHandler('9')}>9</button>
        <button onClick={() => clickHandler('-')}>-</button>
        <br />
        <button onClick={() => clickHandler('0')}>0</button>
        <button onClick={() => clickHandler('**')}>x<sup>y</sup></button>
        <button onClick={() => sqrtHandler()}>√</button>
        <button onClick={() => clickHandler('*')}>*</button>
        <br />
        <button onClick={() => clickHandler('.')}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </>
  );
};
