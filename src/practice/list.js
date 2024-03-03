
import { programmingLanguages } from './util.js';
import React from 'react';
import "./style.css"

export const List = () => {
    return (
        <div className='container'>
            {programmingLanguages.map((item, index) => (
                <div key={item.name} className='main-container'>
                   <h3>{item.name}</h3>
                   <p> {item.year}</p>
                  <p>  {item.paradigm}</p>
                  <p> {
                        item.description
                    }</p> 
                </div>
            ))}
        </div>
    );
};
