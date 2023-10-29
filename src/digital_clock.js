import React, { useState} from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
        
        // without seconds
        //setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    setInterval(updateTime, 1000);

    return (
        <div className="digital-clock">
            <h1>Time: {time}</h1>
        </div>
    )
}

export default DigitalClock;