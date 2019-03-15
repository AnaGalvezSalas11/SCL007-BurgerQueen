import React from 'react';
import './food.css';

function MenuFood (props){
    if (props.buttonf){
        return (
        <div className = "food_option">
            <button className = "simpleHamburguerRes" onClick={() => {
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Hamburguesa simple de res"])[0],
                    precio: props.listFood.Menu["Hamburguesa simple de res"]["Hamburguesa simple de res"]}])}}>Harburguesa Simple de Res$1.500</button>

            <button className = "simpleHamburguerPollo" onClick={()=>{
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Hamburguesa simple de pollo"])[0],
                    precio: props.listFood.Menu["Hamburguesa simple de pollo"]["Hamburguesa simple de pollo"]}])}}> Hamburguesa Simple de Pollo </button>

            <button className = "simpleHamburguerVegetariana" onClick={()=> {
                props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Hamburguesa simple vegetariana"])[0],
                    precio: props.listFood.Menu["Hamburguesa simple vegetariana"][["Hamburguesa simple vegetariana"]]}])}}>Hamburguesa Simple Vegetariana</button>

            <button className = "dobleHamburguerRes" onClick={()=> {
                props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Hamburguesa doble de res"])[0],
                    precio: props.listFood.Menu["Hamburguesa doble de res"][["Hamburguesa doble de res"]]}])}} > Hamburguesa Doble de Res</button>

            <button className = "dobleHamburguerPollo" onClick={()=> {
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Hamburguesa doble de pollo"])[0],
                    precio: props.listFood.Menu["Hamburguesa doble de pollo"][["Hamburguesa doble de pollo"]]}])}}> Hamburguesa Doble de Pollo</button>

            <button className = "dobleHamburguerVegetariana" onClick={()=> {
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Hamburguesa doble vegetariana"])[0],
                    precio: props.listFood.Menu["Hamburguesa doble vegetariana"][["Hamburguesa doble vegetariana"]]}])}}> Hamburguesa Doble Vegetariana</button>

            <button className = "french_fries" onClick={()=> {
                props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Papas fritas"])[0],
                    precio: props.listFood.Menu["Papas fritas"][["Papas fritas"]]}])}}> Papas Fritas $500</button>

            <button className = "onion_rings" onClick={()=> {
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Onion rings"])[0],
                    precio: props.listFood.Menu["Onion rings"][["Onion rings"]]}])}}> Aros de Cebolla $500</button>

            <button className = "cheese" onClick={()=> {
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Queso"])[0],
                    precio: props.listFood.Menu["Queso"][["Queso"]]}])}}> Agregar Queso $500</button>

            <button className = "egg" onClick={()=> {
                    props.onClick([{
                    comida: Object.keys(props.listFood.Menu["Huevo"])[0],
                    precio: props.listFood.Menu["Huevo"][["Huevo"]]}])}}> Agregar Huevo $500</button> 
        </div>
        )}
    else{
        return null
        }
    }

export default MenuFood;