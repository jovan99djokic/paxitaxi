import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import Logo from '../Images/Logo.png';

const Header = () => {

    const history = useHistory();
    const handleClick = (path) => history.push(path);


    return (
        <div className="header">
            <button className="button" onClick={() => handleClick('cenovnik')}>Cenovnik</button>
            <h1 className="h1">063-568-666</h1>
            <img src={Logo} alt="Logo" onClick={() => handleClick('/')}></img>
            
        </div>

    );
};

export default Header
