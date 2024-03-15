import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { increment, decrement, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
  const  count = useSelector((state) => state.counter.count); // Selector Hook
  const dispatch = useDispatch();

  const [amountInput , setIncrementByAmount] = useState(0);
  const amountInNumber = Number(amountInput) || 0;

  console.log(count);
  return (
    <div> 
        <p> { count } </p>
        <div>
            <button onClick={() => dispatch(increment())}> Increment</button>
            <button onClick={() => dispatch(decrement())}> Decrement</button>
        </div>
        <input 
            value = {amountInNumber}
            onChange={(e) => setIncrementByAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(amountInNumber))}> Increase amount by input</button>
        <button onClick={() => dispatch(reset())}> Reset </button>
    </div>

  )
}

export default Counter;