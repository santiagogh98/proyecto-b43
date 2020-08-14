import React from 'react';

function SearchAc(props) {
    const{buscarActividades}=props;
    const handlerEvent=(evento)=>{
        console.log(evento.target.value)
        buscarActividades(evento.target.value);
    }
    return (
        <div className="input-group mb-3 mt-3 col-md-6 mx-auto">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">¿Que lugar deseas descubrir?</span>
            </div>
            <input onChange={handlerEvent} type="text" className="form-control" placeholder="ej. cdmx" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    )
}
export default SearchAc;