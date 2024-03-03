import React, { useState } from 'react'
import "./color.css"
export const Color = () => {
    let [color, setcolor]=useState("green")
    let [first, setfirst]=useState("lightgreen")
    let [second, setsecond]=useState("dargreen")
    const firsthandler=(event)=>
    {
    setfirst(event.target.value)
    }
    const secondhandler=(event)=>
    {
        setsecond(event.target.value)
    }
  return (
    <div>
        <div style={{backgroundColor:color}} className='main'></div>
        <input type='color' value={first} onChange={firsthandler}></input>
        <input type='color' value={second} onChange={secondhandler}></input>
    </div>
  )
}
