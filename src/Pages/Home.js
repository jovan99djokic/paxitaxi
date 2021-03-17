import React from 'react';
import Header from '../Elements/Header';
import './Home.css';
import './Razgledanje.css'
import './mek.css'
import Aerodrom from '../Images/aerodrom.jpg';
import razgledanje from '../Images/razgledanje.jpg'
import mek from '../Images/mek.jpg'

const Home = () => {
    return (
        <>
        

        <div className="okvir1">
                <img src={mek} alt="Aerodrom-Slika"></img>
        </div>
        <div>
            <Header></Header>
        </div>
        <div className="jeftinije"><h1>Sa nama prelazite vise kilometara jeftinije.</h1></div>
        <div className="broj">
            <h5>063-568-666</h5>
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
                <img src={Aerodrom} alt="Turisticko razgledanje grada"></img>
        </div>
        </>
    )
}

export default Home
