import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";



function Landing() {
    return (
        <div className="main-container">
            <div className="sub-container">
                <h1>BIENVENIDO A TURISTEAPP</h1>
                <p className="elegir">ELIGE TU PERFIL</p>
                <div className="opciones">
                    <div className="opcion">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d' }} to="/turista">
                            <img src="https://img.icons8.com/plasticine/100/000000/suitcase.png"/>
                            <p>TURISTA</p>
                        </Link>
                    </div>
                    <div className="opcion">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d'  }} to="/Negocio">
                            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/>
                            <p>REGISTRAR <br/>NEGOCIOS</p>
                        </Link>
                    </div>
                    <div className="opcion">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d' }} to="/Actividad">
                        <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/>
                            <p> REGISTRAR <br/>ACTIVIDADES</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing