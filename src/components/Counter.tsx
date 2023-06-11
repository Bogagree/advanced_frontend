import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment} className='button'>increment</button>
        </div>
    );
};