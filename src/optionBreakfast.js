import React from 'react';
import './optionBreakfast.css';

function OptionBreakfast(props) {
    return(
        <button onClick={props.buttonbf} className="breakfastButton">Desayuno</button>
    )
}


export default OptionBreakfast