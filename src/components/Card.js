import React from 'react';
const Card = (props) => {
    const { nombre, localizacion, tipo, horario, promedio, id } = props;
    const{setNegociosFiltrados}=props;
    return (
        <React.Fragment>
            <div class="col mb-4">
                <div class="card h-100">
                    <img src="https://www.dailymaverick.co.za/wp-content/uploads/Panel-of-three-meals-MAIN-IMAGE-1600x756.jpg" class="card-img-top" alt="Comida" />
                    <div class="card-body">
                        <h5 class="card-title">{nombre}</h5>
                        <h4>{localizacion}</h4>
                        <p class="card-text">Tipo:{tipo}</p>
                        <p class="card-text">Horario:{horario}</p>
                        <p class="card-text">Gasto por persona:${promedio}</p>
                        <a onClick={setNegociosFiltrados} class="btn btn-primary">Agregar a itinerarios</a> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )}
export default Card