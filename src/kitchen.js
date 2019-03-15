import React from 'react';
import './kitchen.css';

function KitchenOrder(props){
    const mostrarlista = props.listOrder.map(item=>{
        return(
            <li>{item.comida} ${item.precio}</li>
        )
    })
    return(
        <div>
            <div className="title_kitchen">Cocina</div>
            <div className="content">Nombre Cliente: {props.nameClient}</div>
            <ul className="requested_detail">{mostrarlista}</ul>
        </div>
    )
}


export default KitchenOrder