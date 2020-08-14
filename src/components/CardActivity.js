import React from 'react';
import CardItinerario from './CardItinerario'


const CardActivity = (props) => {

    const { nombre, localizacion,  horario,costo,duracion,id} = props;
    

  
    

    return (
        <div className="card mb-4">
            <h5 className="card-header">{nombre}</h5>
            <div className="card-body">
                <h4 className="card-title">Se encuentra en :{localizacion}</h4>
                <p className="card-text">Horario:{horario}</p>
                <p className="card-text">Costo:{costo}</p>
                <p className="card-text">Duración:{duracion}</p>

               
            </div>
            <button >Agregar a itinerario</button>
        </div>
    )
}

export default CardActivity