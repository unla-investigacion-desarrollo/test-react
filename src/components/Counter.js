import React from 'react';

export function Counter ({counter, increment, decrement}) {
  return(
    <div>
      <div>
        Redux Counter: <span id='counter'>{counter}</span>
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}