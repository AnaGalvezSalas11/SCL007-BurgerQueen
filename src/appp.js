import React, { Component } from 'react';
import './appp.css';
import Menubf from './breakfast';
import './breakfast.css';
import OptionBreakfast from './optionBreakfast';
import './optionBreakfast.css';
import MenuFood from './food';
import OptionFood from './optionFood';
import OptionLiquids from './optionliquids';
import MenuLiquids from './liquids';
import KitchenOrder from './kitchen.js'
import { database } from './provider.js'

import './kitchen.css';


class BurgerQueen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            input: "",
            watch: false,
            watchfood: false,
            watchliquids: false,
            data: props.data,
            list: []

        }
        this.upDate = this.upDate.bind(this);
        this.upDate2 = this.upDate2.bind(this);
        this.buttonsBreakfast = this.buttonsBreakfast.bind(this);
        this.buttonFood = this.buttonFood.bind(this);
        this.buttonLiquids = this.buttonLiquids.bind(this);
        this.addlist = this.addlist.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.submit = this.submit.bind(this)
    }

    upDate() {
        this.setState({
            input: "",
            name: this.state.input,

        })
    }

    deleteList(h){ 
        this.setState({
            ...this.state,
            list: this.state.list.filter((delete1) => {
                return delete1 !== h
            })
        })
        
    }
    
    submit(){
        const submitOrder = {
            name: this.state.name,
            list: this.state.list
        }

        let saveOrder = database.ref("cocina").push().key;
        let updates = {}

        updates["cocina/" + saveOrder] = submitOrder;

        return database.ref().update(updates) 
    }

    addlist(a){
        this.setState({
            ...this.state,
            list: this.state.list.concat(a)
        })
    }

    buttonsBreakfast() {
        this.setState({
            ...this.state,
            watch: true, 
            watchfood:false,
            watchliquids:false,
        })
    }


   
    buttonFood() {
        this.setState({
            ...this.state,
            watchfood: true,
            watch: false,
            watchliquids: false

        })
    }

    buttonLiquids(){
        this.setState({
            ...this.state,
            watchliquids: true,
            watch: false,
            watchfood: false,
        })

    }

    upDate2(e) {
        this.setState({
            ...this.state,
            input: e.target.value
        })
    }

    container() {
        return (this.state.name)
    }

    render() {
        return (
            <div>
                <div className="title"> Burguer Queen </div>
                <div className="main">
                    <div className="garzon">
                        <div className="title_garzon">Garzon</div>
                        <div className = "clientName"> 
                            <input className="mailing_data" placeholder="Nombre Cliente" value={this.state.input} onChange={this.upDate2} ></input>
                            <button onClick={this.upDate} className="click_data">Listo</button>
                        </div>
                        <div className="garzon_menu_option"> 
                            <div className="option_menu">
                                <OptionBreakfast buttonbf={this.buttonsBreakfast}/>
                                <OptionFood buttonf={this.buttonFood}/> 
                                <OptionLiquids buttonl={this.buttonLiquids}/>
                            </div>
                            <div className= "menu_option">
                                <Menubf listBreakfast={this.state.data} buttonbf={this.state.watch} 
                                onClick={this.addlist}/>
                                <MenuFood listFood={this.state.data} buttonf={this.state.watchfood} onClick={this.addlist}/> 
                                <MenuLiquids listLiquids={this.state.data} buttonl={this.state.watchliquids} onClick={this.addlist} />
                            </div>
                        </div>
                    </div>
                    <div className="kitchen">
                        <KitchenOrder submitFireBase={this.submit} deleteProduct={this.deleteList} listOrder={this.state.list}  nameClient={this.container()}/>
                    </div>
                </div>
            </div>
        )}

        }




export default BurgerQueen;