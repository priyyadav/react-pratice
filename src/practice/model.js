import React, { useState } from 'react';
import './model.css'; // 

export const Model = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(prev => !prev)}>Open</button>
            {show && (
                <div className="overlay">
                    <div className="modal">
                        <p>hello</p>
                        <button onClick={() => setShow(prev => !prev)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};
