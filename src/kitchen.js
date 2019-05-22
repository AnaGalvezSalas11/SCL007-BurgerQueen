import React from 'react';
import './kitchen.css';

function KitchenOrder(props) {

    const showList = props.listOrder.map((item, i) => {
        return (
            <li key={i} className= "detailList">{item.food} ${item.price} <button className="btndelete" onClick = {()=>props.deleteProduct(item)}>X</button></li>
    )})

    const total = props.listOrder.reduce((before, after) => {
            return  (before + after.price)},0)
    
        
    return (
        <div>
            <div className="title_kitchen">Pedido</div>
            <div className="content"> {props.nameClient}</div>
            <ul className="requested_detail">{showList}</ul>
            <ul className="total">Total = ${total}</ul>
            <div className= "btnSubmitOrder">
            <button className="btnsubmit" onClick= {props.submitFireBase}> Enviar a Cocina </button>
            <button className="btnsubmit"  onClick = {props.openKitchen}>Ver pedidos</button>
            </div>
        </div>
    )
}


export default KitchenOrder