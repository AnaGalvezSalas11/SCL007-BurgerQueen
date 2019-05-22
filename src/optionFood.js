import React from 'react'
import './optionFood.css'

function OptionFood (b){
    return(
        <button onClick={b.buttonf}  className="optionButton">Hamburguesas</button>
    )
}

export default OptionFood