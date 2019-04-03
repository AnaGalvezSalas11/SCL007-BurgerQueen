import React from 'react';
import ReactDOM from 'react-dom';
import './appp.css';
import BurgerQueen from './appp.js';
import data from './data.json'


ReactDOM.render(
    <BurgerQueen data={data}/>,
    document.getElementById('root')
)

