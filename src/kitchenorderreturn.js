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
                <div>{element.food}</div>
                <div>{element.price}</div>
                </div>
            )
            
        })
        return(
            <div key={i}>
            <div>{item.name}</div>
            <div>{list2}</div>
            </div>
        )
    })
    
    
        return(
            <div>
                 <div>{content2}</div>
                 

            </div>
        )
    }


export default Kitchenreturn;