import React from 'react';
import './kitchenorderreturn.css'

function Kitchenreturn(props){
    console.log(props)
    let content = Object.values(props.returnMessage)
    // let nameReturn = content[content.length -1]
    // console.log(nameReturn)
    const content2 = content.map((item, i) => {
        console.log(item.list);
        const list2 = item.list.map((element,i) => {
            console.log(element)
            return (
                <div key={i}>
                <li>{element.food}.</li>
                </div>
            )
            
        })
        return(
            <div key={i} className= 'orderClient3'>
            <div className= 'titleOrder'>Cliente: {item.name}</div>
            <div className = 'listOrderClient' > {list2}</div>
            </div>
        )
    })
    
    
        return(
            <div className = "orderClient1">
                 <div className = "orderClient2">{content2}</div>
                 <div className = "contentbtn"><button className = "btnreturn" onClick={props.btnreturn}  >Volver</button></div>
                 

            </div>
        )
    }


export default Kitchenreturn;