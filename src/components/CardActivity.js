import React from 'react';
const CardActivity = (props) => {

    const { nombre, localizacion,  horario,costo,duracion,id} = props;
    const{setNegociosFiltrados}=props;
    return (
        <React.Fragment>
            <div class="col mb-4">
                <div class="card h-100">
                    <img src="https://www.elterritorio.com.ar/img/1/222/7066312455292526_1.jpg" class="card-img-top" alt="Actividad" />
                    <div class="card-body">
                        <h5 class="card-title">{nombre}</h5>
                        <h4>Se encuentra en: {localizacion}</h4>
                        <p class="card-text">Horario: {horario}</p>
                        <p class="card-text">Costo: ${costo}</p>
                        <p className="card-text">Duración:{duracion}</p> 
                        <a onClick={setNegociosFiltrados} class="btn btn-primary">Agregar a itinerarios</a>      </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default CardActivity