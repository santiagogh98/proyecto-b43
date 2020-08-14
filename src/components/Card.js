import React from 'react';


const Card = (props) => {

    

    const { nombre, localizacion, tipo, horario,promedio,id} = props;
    

    return (
        <div className="card mb-4">
            <h5 className="card-header">{nombre}</h5>
            <div className="card-body">
                <h4 className="card-title">{localizacion}</h4>
                <p className="card-text">Tipo:{tipo}</p>
                <p className="card-text">Horario:{horario}</p>
                <p className="card-text">Gasto por persona:${promedio}</p>
               
            </div>
            <button>Agregar a itinerario</button>
        </div>
    )
}

export default Card