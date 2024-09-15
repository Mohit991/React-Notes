import { useState } from 'react'

const MyComponent = () => {
    const [shipping, setShipping] = useState()

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    return (
        <div>
            <label>
                <input
                    type='radio'
                    value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label>
            <br />
            <label>
                <input
                    type='radio'
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                />
                Home Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent