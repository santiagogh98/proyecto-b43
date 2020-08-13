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
                        <img src="https://img.icons8.com/plasticine/100/000000/suitcase.png"/>
                        <p>TURISTA</p>
                    </div>
                    <div className="opcion">
                        <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/>
                        <p>NEGOCIO</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing
