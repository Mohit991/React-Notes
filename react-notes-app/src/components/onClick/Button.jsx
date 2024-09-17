import React from "react";
const Button = () => {
    const handleClick = (e) => {
        e.target.textContent = "Dont Click me"
    };
    
    return <button onClick={(e) => handleClick(e)}>Click me</button>;
};
export default Button;
