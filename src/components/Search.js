import React from 'react';

function Search(props) {

   
    const{buscarNegocios}=props;
    

    const handlerEvent=(evento)=>{
        console.log(evento.target.value)
        buscarNegocios(evento.target.value);
        

    }

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">En que lugar deseas comer?</span>
            </div>
            <input onChange={handlerEvent} type="text" className="form-control" placeholder="CDMX,TEPOZTLAN,ETC" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    )
}

export default Search;