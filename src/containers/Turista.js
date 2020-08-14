import React from 'react'
import './Turista.css'
import { Link } from "react-router-dom";

function Turista() {
    return (
        <div className='main-container'>
            <div className='sub-container'>
                <h1>¿Qué quieres hacer hoy?</h1>
                <div className="pruebas">
                    <div className="prueba">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d' }} to="/TuristaFood">
                            <img className="specialMargin" src="https://img.icons8.com/officel/80/000000/meal.png"/>
                            <p>¿Dónde comer?</p>
                        </Link>
                    </div>
                    <div className="prueba">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d'  }} to="/TuristaFood">
                            <img src="https://img.icons8.com/officel/80/000000/waypoint-map.png"/>
                            <p>¿Qué Hacer?</p>
                        </Link>
                    </div>
                    <div className="prueba">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d'  }} to="/TuristaFood">
                            <img src="https://img.icons8.com/dusk/64/000000/tasklist.png"/>
                            <p>Itinerario</p>
                        </Link>
                    </div>
                    <div className="prueba">
                        <Link style={{ textDecoration: 'none', color: '#fbd46d'  }} to="/TuristaFood">
                            <img src="https://img.icons8.com/officel/80/000000/quest.png"/>
                            <p className="dosPalabras">Itinerario Random</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Turista
