import React, {useState} from 'react'
import {Link } from "react-router-dom";


const CreateFormAc = (props) => {
    const {createActividad} = props;

    const [nombre, setNombre] = useState('');
    const [localizacion, setLocalizacion] = useState('');
    const [horario, setHorario] = useState('');
    const [costo, setCosto] = useState('');
    const [duracion, setDuracion] = useState('');


    const handlerNombre = (evento) => {
        setNombre(evento.target.value);
    }

    const handlerLocalizacion = (evento) => {
        setLocalizacion(evento.target.value);
    }
    
    const handlerHorario = (evento) => {
        setHorario(evento.target.value);
    }
    const handlerCosto = (evento) => {
        setCosto(evento.target.value);
    }
    const handlerDuracion = (evento) => {
        setDuracion(evento.target.value);
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
                    <label htmlFor="title">Horario</label>
                    <input onChange={handlerHorario} type="text" className="form-control" id="tipo" />
                </div>
             </div>
             <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Costo</label>
                    <input onChange={handlerCosto} type="text" className="form-control" id="horario" />
                </div>
             </div>
             <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">duracion</label>
                    <input onChange={handlerDuracion} type="text" className="form-control" id="promedio" />
                </div>
             </div>




            <Link to='/'> <button onClick={ () => {createActividad(nombre,localizacion,horario,costo,duracion )}} className="btn btn-primary">Agregar</button></Link>    
            </div>
            
            
            
        </div>
    )
}

export default CreateFormAc