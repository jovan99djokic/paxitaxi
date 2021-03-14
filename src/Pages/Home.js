import React from 'react';
import Header from '../Elements/Header';
import './Home.css';
import Pozadina from '../Images/Pozadina.jpg';
import Aerodrom from '../Images/aerodrom.jpg';

const Home = () => {
    return (
        <>
        <div>
            <Header></Header>
        </div>

        <div className="home">
            <img src={Pozadina} alt="Pozadina"></img>
        </div>

        <div className="okvir">
                <h1>Jedna od pogodnosti Paxi Taxija je zakazivanje vožnje do aerodroma ili van grada,a podrazumeva se mogućnost biranja većih vozila i dečijeg sedišta.</h1>
        </div>
        <div className="okvir1">
                <img src={Aerodrom} alt="Aerodrom-Slika"></img>
        </div>

        </>
    )
}

export default Home
