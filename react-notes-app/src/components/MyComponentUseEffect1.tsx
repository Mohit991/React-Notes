import React, { useState, useEffect } from "react";
function MyComponentUseEffect1() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(handleResize, [width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(
        <>
            <p>Window width: {width} px</p>
            <p>Window height: {height} px</p>
        </>
    )
}

export default MyComponentUseEffect1;
