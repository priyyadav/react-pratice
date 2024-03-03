import React, { useState } from "react";

export const Counter = () => {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(1);

  const inputHandler = (event) => {
    setCount(Number(event.target.value)); 
  };

  const addHandler = () => {
    setData((prev) => prev + count); 
  };

  const subHandler = () => {
    setData((prev) => prev - count); 
  };
  const resetHandler=()=>
  {
   setData(0)
  }
  return (
    <>
      <h1>{data}</h1>
      <div>
        <button onClick={addHandler}>+</button>
        <button onClick={subHandler}>-</button>
      </div>
      <div>
        <span>Increment/Decrement</span>
        <input value={count} onChange={inputHandler}></input>
      </div>
      <button onClick={resetHandler}>reset</button>
    </>
  );
};
