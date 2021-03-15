import React from 'react';
import Header from '../Elements/Header';
import './Home.css';
import './Razgledanje.css'
import './mek.css'
import Pozadina from '../Images/Pozadina.jpg';
import Aerodrom from '../Images/aerodrom.jpg';
import razgledanje from '../Images/razgledanje.jpg'
import mek from '../Images/mek.jpg'

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

        <div className="tekst">
                <h1>Turištičko razgledanje opštine Paraćin, obilazak svih verskih i kulturnih znamenosti.</h1>
                <h2>Paxi Taxi u svojoj ponudi ima i usluge prevoza izvan granica Srbije.Komgornim i modernim automobilom i profesionalnim vozačem.Vaše putovanje biće sigurno i udobno.Za više informacija o vangraničnom prevozu kontaktirajte nas putem broja telefona ili mejla.</h2>
        </div>

        <div className="slika">
                <img src={razgledanje} alt="Turisticko razgledanje grada"></img>
        </div>

        <div className="tekst1">
                <h1>Paxi Taxi u svojoj ponudi ima i usluge prevoza izvan granica Srbije.Komgornim i modernim automobilom i profesionalnim vozačem.Vaše putovanje biće sigurno i udobno.Za više informacija o vangraničnom prevozu kontaktirajte nas putem broja telefona ili mejla.</h1>
        </div>

        <div className="slika1">
                <img src={mek} alt="Turisticko razgledanje grada"></img>
        </div>
        </>
    )
}

export default Home
