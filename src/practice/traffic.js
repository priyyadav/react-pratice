import React, { useEffect, useState } from 'react';
import './traffic.css';

export const Traffic = () => {
    const [redActive, setRedActive] = useState(true);
    const [yellowActive, setYellowActive] = useState(false);
    const [greenActive, setGreenActive] = useState(false);
    const [timer, setimer]=useState(5)
  
    useEffect(() => {
        let timer;
        if(redActive)
        {
             timer = setTimeout(() => {
                setRedActive(false);
                setGreenActive(true);
                setimer(3)
                
              }, 5000);
             
            
        }
        else if(greenActive)
        {      
             timer = setTimeout(() => {
            setGreenActive(false);
            setYellowActive(true);
            setimer(2)
         
          }, 3000);

        }
        else{
             timer = setTimeout(() => {
                setYellowActive(false);
                setRedActive(true);
              setimer(5)
              }, 2000);
        }
        const intervalId = setInterval(() => {
            if(timer>1)
            {
                setimer(prevTimer => prevTimer - 1);
            }
            

        }, 1000);

  
  
      return () => {
        clearTimeout(timer);
        clearInterval(intervalId);
      };
    }, [redActive, yellowActive, greenActive]);
    
    return (
      <div className='main'>
          <div className='box' style={{ backgroundColor: redActive ? 'red' : '' }}></div>
          <div className='box' style={{ backgroundColor: yellowActive ? 'yellow' : '' }}></div>
          <div className='box' style={{ backgroundColor: greenActive ? 'green' : '' }}></div>
          <div>{timer}</div>
      </div>
    );
};
