import React, { useEffect, useState } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        //create an interval that updates once every second
        const intervalId = setInterval(() => {
            //Setting time to current date and time
            //after every second
            setTime(new Date());
        }, 1000);

        //clean up function
        //when this component unmounts
        //freeing up any resources when this components unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"
        
        hours = hours % 12  || 12
        return `${padZeroInBeginning(hours)}:${padZeroInBeginning(minutes)}:${padZeroInBeginning(seconds)}:${meridiem}`
    }

    function padZeroInBeginning(number){
        return (number < 10 ? "0" : "") + number
    }
    return (
        <div>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;
