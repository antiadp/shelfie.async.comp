import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../shelfieLogo.png';
import '../App.css';

export default function() {
    return(
        <div className="App">
            <header className="App-header">
            <div>
                <Link to='/' > 
                    <img src={logo} className="App-logo" alt="logo" /> 
                </Link>
            </div>
                <h1 className="App-title"> SHELFIE </h1>
            </header>
        </div>
    )
}