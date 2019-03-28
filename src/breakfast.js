import React from 'react';
import './breakfast.css';



function Menubf(props) {
    if (props.buttonbf) {
        return (
            <div className="setbuttonBf">
                <button className="americanCoffee" onClick={() => {
                        props.onClick([{
                        food: Object.keys(props.listBreakfast.Menu["Cafe americano"])[0],
                        price: props.listBreakfast.Menu["Cafe americano"]["cafe americano"]
                        }])}}>Café Americano $500</button>

                <button className="coffeeMilk" onClick={() => {
                        props.onClick([{
                        food: Object.keys(props.listBreakfast.Menu["Cafe con leche"])[0],
                        price: props.listBreakfast.Menu["Cafe con leche"]["cafe con leche"]
                        }])}} >Cafe con Leche $700</button>
                <button className="sandwich" onClick={() =>{
                        props.onClick([{
                        food: Object.keys(props.listBreakfast.Menu["Sandwich de jamon y queso"])[0],
                        price: props.listBreakfast.Menu["Sandwich de jamon y queso"]["Sandwich de jamon y queso"]
                        }])}}>Sandwich Jamon y Queso $1.000</button>
                <button className="juice" onClick={() => {
                        props.onClick([{
                        food: Object.keys(props.listBreakfast.Menu["Jugo natural"])[0],
                        price: props.listBreakfast.Menu["Jugo natural"]["Jugo natural"]
                        }])}}>Jugo Natural $700</button>
            </div>
        )
    }
    else {
        return null
    }

}
export default Menubf;