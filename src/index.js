import React from 'react';
import ReactDOM from 'react-dom';
import './appp.css';
import BurguerQueen from './appp.js';
import data from './data.json'


ReactDOM.render(
    <BurguerQueen data={data}/>,
    document.getElementById('root')
)

