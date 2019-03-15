import React from 'react'
import './liquids.css'

function MenuLiquids(props){
    if(props.buttonl){
    return(
        <div className= "liquidsOption">
            <button className="water" onClick={() => {
                props.onClick([{
                comida: Object.keys(props.listLiquids.Menu["Agua 500 ml"])[0],
                precio: props.listLiquids.Menu["Agua 500 ml"]["Agua 500 ml"]}])}}>Agua (500 ml) $500</button>

            <button className="waterBig"  onClick={() => {
                props.onClick([{
                comida: Object.keys(props.listLiquids.Menu["Agua 750 ml"])[0],
                precio: props.listLiquids.Menu["Agua 750 ml"]["Agua 750 ml"]}])}}>Agua (750 ml) $800</button>

            <button className="soda" onClick={() => {
                props.onClick([{
                comida: Object.keys(props.listLiquids.Menu["Gaseosa 500 ml"])[0],
                precio: props.listLiquids.Menu["Gaseosa 500 ml"]["Gaseosa 500 ml"]}])}}>Gaseosa (500 ml) $700</button>
            
            <button className= "bigSoda" onClick={() => {
                props.onClick([{
                comida: Object.keys(props.listLiquids.Menu["Gaseosa 750 ml"])[0],
                precio: props.listLiquids.Menu["Gaseosa 750 ml"]["Gaseosa 750 ml"]}])}}> Gaseosa (750 ml) $1000 </button>
        </div>
    )}
    else{
        return null
    }
    
}

export default MenuLiquids;