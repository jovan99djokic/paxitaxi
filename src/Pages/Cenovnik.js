import React from 'react'
import Header from '../Elements/Header'

import './Cenovnik.css'

import Prvi_odradjen from '../Images/Prvi_odradjen.jpg'
import Drugi_odradjen from '../Images/Drugi_odradjen.jpg'

function Cenovnik() {
    return (
        <div>
            <Header></Header>
            <img className="img" src={Prvi_odradjen} alt="Cenovnik"></img>
            <img className="img" src={Drugi_odradjen} alt="Cenovnik"></img>
        </div>
    )
}

export default Cenovnik
