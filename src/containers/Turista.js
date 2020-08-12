import React from 'react'
import {Link } from "react-router-dom";

function Turista() {
    return (
        <div className='d-flex flex-column '>
            <Link to='/TuristaFood'><button>¿Donde comer?</button></Link>
            <Link to='/TuristaFood'><button>¿Qué Hacer?</button></Link>
            <Link to='/TuristaFood'><button>Itinerario</button></Link>
            <Link to='/TuristaFood'><button>Itinerario Random</button></Link>
            
        </div>
    )
}

export default Turista
