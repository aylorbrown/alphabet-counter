import React from 'react';

const str = "abcdefghijklmonpqrstuvwxyz";
const alpha = str.split("");


export default function Counter({
    count, 
    handleIncrement, 
    handleDecrement
}) {
    return (
        <div>
            <h1>{alpha[count]}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

// you don't need curlys if your importing a REACT component 

// smart - talks to redux 
// dumb - just props 

// if i were to store alphabet in state, how do i do that????