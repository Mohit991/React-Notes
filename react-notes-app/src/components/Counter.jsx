import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    function handleClick() {
        setCounter(prevCounter=> prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
    }
    return (
        <div>
            <input
                type="number"
                value={counter}
            />
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Counter