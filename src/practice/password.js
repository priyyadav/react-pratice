import React, { useState } from 'react'
import "./password.css"
export const Password = () => {
    const [value, setvalue]=useState(' ')
    const [lower, setlower]=useState('grey');
    const [upper, setupper]=useState('grey')
    const [special, setspecial]=useState('grey');
    const [number, setnumber]=useState('grey');
    const inputhandler=(e)=>
    {
        let data=e.target.value
        setvalue(e.target.value);

        for (let i = 0; i < data.length; i++) {
            const char = data.charAt(i);
            if (char >= 'a' && char <= 'z') {
                setlower("green")
            } else if (char >= 'A' && char <= 'Z') {
                setupper("green")
            } else if ('!@#$%^&*(),.?":{}|<>'.indexOf(char) !== -1) {
                setspecial("green")
            } else if (char >= '0' && char <= '9') {
                setnumber("green")
            }
        }

        
    }
  return (
    <div>

        <input onInput={inputhandler} value={value}></input>
        <div>
            <span style={{color:lower}}>lower</span>
            <span style={{color:upper}}>upper</span>
            <span style={{color:special}}>special</span>
            <span style={{color:number}}>number</span>
        </div>
    </div>
  )
}
