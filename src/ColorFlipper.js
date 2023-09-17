import React, { useState } from 'react';

const ColorFlipper = () => {
    const [color, setColor] = useState('#FFFFFF');



    const changeColor = () => {
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(newColor);
    }

    return (
        <div className="color-flipper" style={{ backgroundColor: color }}>
            <h1>Background Color: {color}</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}


export default ColorFlipper;