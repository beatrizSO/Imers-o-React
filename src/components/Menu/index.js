import React from 'react';
import logo from '../../assets/image/logo.png';
import './Menu.css';    
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Frontflix logo" />
            </a>
            
            <Button className="ButtonLink" href="/">
                New Video
            </Button>
        </nav>
    );
}

export default Menu;