import React, { useState, useEffect } from "react";

const MyComponentUseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);

    useEffect(() => {
        document.title = `Counter = ${count}}`;
    }, [count]);

    function addCount() {
        setCount((prevCount) => prevCount + 1);
    }

    function subtractCount() {
        setCount((prevCount) => prevCount - 1);
    }

    function changeColor() {
        setColor(prevColor => prevColor === 'green' ? 'red' : 'green')
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default MyComponentUseEffect;
