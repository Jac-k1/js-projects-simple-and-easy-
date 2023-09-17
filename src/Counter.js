import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    return (
        <div className="counter">
            <h1>Count: {count}</h1>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={increaseCount}>Increase Count</button>
            </div>
    )
}

export default Counter;