import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import './Menu.css';    
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a to="/">
                <img className="Logo" src={logo} alt="Frontflix logo" />
            </a>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                New Video
            </Button>
        </nav>
    );
}

export default Menu;