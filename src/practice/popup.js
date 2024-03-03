import React, { useState } from 'react';
import "./pop.css"

export const Popup = () => {
    const [top, setTop] = useState('top');
    const [left, setLeft] = useState('left');
    const [status, setStatus] = useState('success');
    const [inputValue, setInputValue] = useState('This is a toast message!');
    const [rangeValue, setrangevalue] = useState(2);
    const [data, setdata]=useState(" ")
    const [show, setShow] = useState(false);
    const [topposi, setTopposi] = useState('');
    const [leftposi, setLeftposi] = useState('');
    const [bottomposi, setBottomposi] = useState('');
    const [rightposi, setRightposi] = useState('');
    const [bgcolor, setBgcolor] = useState('');

    const topData = ["top", "bottom"];
    const leftData = ["left", "right"];
    const statusData = ["success", "error", "warning", "info"];

    const clickHandler = () => {
        setShow(true);
        console.log("clickHandler invoked")
        setdata(inputValue)
        if (top === 'top') {
            setTopposi("10px");
            setBottomposi('');
        } else if (top === 'bottom') {
            setTopposi('');
            setBottomposi("10px");
        }

        if (left === 'left') {
            setLeftposi("10px");
            setRightposi('');
        } else if (left === 'right') {
            setLeftposi('');
            setRightposi("10px");
        }
        
        switch (status) {
            case 'success':
                setBgcolor('green');
                break;
            case 'error':
                setBgcolor('red');
                break;
            case 'warning':
                setBgcolor('brown');
                break;
            case 'info':
                setBgcolor('blue');
                break;
            default:
                setBgcolor('green');
        }
        setTimeout(() => {
            setShow(false)
        }, rangeValue*1000);
    }

    return (
        <div className='main'>
            <select value={top} onChange={(e) => setTop(e.target.value)}>
                {topData.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <select value={left} onChange={(e) => setLeft(e.target.value)}>
                {leftData.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                {statusData.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <input value={inputValue} placeholder='Enter the message' onChange={(e) => setInputValue(e.target.value)} />
            <input type='range' min={0} max={10} value={rangeValue} onChange={(e)=>setrangevalue(e.target.value)}></input>
            <button onClick={clickHandler}>Save</button>
            {show && <div style={{ backgroundColor: bgcolor, position: 'absolute',  height:'20px',top: topposi, left: leftposi , bottom:bottomposi, right: rightposi, width:'200px'}}>{data}</div>}
        </div>
    );
}
