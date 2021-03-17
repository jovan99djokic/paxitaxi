import React from 'react'
import Header from '../Elements/Header'

import './Cenovnik.css'

import Prvi_odradjen from '../Images/Prvi_odradjen.jpg'
import Drugi_odradjen from '../Images/Drugi_odradjen.jpg'

function Cenovnik() {
    return (
        <>
        <Header></Header>
        
        <div className="cen">
            <img src={Prvi_odradjen} alt="Cenovnik"></img>
            <img src={Drugi_odradjen} alt="Cenovnik"></img>
        </div>
   
        </>
    )
}

export default Cenovnik
