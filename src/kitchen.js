import React from 'react';
import './kitchen.css';

function KitchenOrder(props) {

    const mostrarlista = props.listOrder.map(item => {
        return (
            <li>{item.comida} ${item.precio}    Borrar</li>
    )})

    const total = props.listOrder.reduce(function (antes, despues) {
            return  (antes + despues.precio)},0)
        
    return(
        <div>
            <div className="title_kitchen">Cocina</div>
            <div className="content">Nombre Cliente: {props.nameClient}</div>
            <ul className="requested_detail">{mostrarlista}</ul>
            <ul className="total">Total = ${total}</ul>
        </div>
    )
}


export default KitchenOrder