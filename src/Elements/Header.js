import React from 'react';
import './Header.css';
import Logo from '../Images/Logo.png';

const Header = () => {



    return (
        <div className="header">
            <button className="button">Cenovnik</button>
            <img src={Logo} alt="Logo"></img>
            
        </div>

    );
};

export default Header
