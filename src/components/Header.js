import React, { Component } from 'react';
import logo from '../images/dinoparks-logo.png'; //we need to tell webpack that this file uses that image as a logo
import './css/styles.css';

class Header extends Component {
    render() {
        return (
        <div  style={{backgroundColor:'lightblue'}} >
            <img className="photo" src={logo} alt="Logo"/>
        </div>
        );
    };
};

export default Header;