import React from 'react';
import { useDispatch } from 'react-redux';
export default function CounterInput() {
const dispatch = useDispatch();
return (
<>
<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
</>
);
}