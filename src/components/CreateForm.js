import React, {useState} from 'react'
import {Link } from "react-router-dom";


const CreateForm = (props) => {
    const {createNegocio} = props;
    

    const [nombre, setNombre] = useState('');
    const [localizacion, setLocalizacion] = useState('');
    const [tipo, setTipo] = useState('');
    const [horario, setHorario] = useState('');
    const [promedio, setPromedio] = useState('');

    const handlerNombre = (evento) => {
        setNombre(evento.target.value);
    }

    const handlerLocalizacion = (evento) => {
        setLocalizacion(evento.target.value);
    }
    const handlerTipo = (evento) => {
        setTipo(evento.target.value);
    }
    const handlerHorario = (evento) => {
        setHorario(evento.target.value);
    }
    const handlerPromedio = (evento) => {
        setPromedio(evento.target.value);
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Nombre</label>
                    <input onChange={handlerNombre} type="text" className="form-control" id="nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Localizacion</label>
                    <input onChange={handlerLocalizacion} type="text" className="form-control" id="localizacion" />
                </div>
                <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Tipo</label>
                    <input onChange={handlerTipo} type="text" className="form-control" id="tipo" />
                </div>
             </div>
             <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Horario</label>
                    <input onChange={handlerHorario} type="text" className="form-control" id="horario" />
                </div>
             </div>
             <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Promedio</label>
                    <input onChange={handlerPromedio} type="text" className="form-control" id="promedio" />
                </div>
             </div>




            <Link to='/'> <button onClick={ () => {createNegocio(nombre,localizacion,tipo,horario,promedio )}} className="btn btn-primary">Agregar</button></Link>    
            </div>
            
            
            
        </div>
    )
}

export default CreateForm