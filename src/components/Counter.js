import React from 'react'; 
import count from '../reducers';

export default function Counter ({
    count, 
    handleIncrement, 
    handleDecrement
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}