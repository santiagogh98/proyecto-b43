import React, {useState} from 'react'
import './CreateForm.css';
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
        <div className="main-container">
            <div className="sub-container">
                <div className="input-container">
                    <label htmlFor="title">NOMBRE</label>
                    <input onChange={handlerNombre} type="text" className="form-control" id="nombre" />
                </div>
                <div className="input-container">
                    <label htmlFor="category">UBICACIÓN</label>
                    <input onChange={handlerLocalizacion} type="text" className="form-control" id="localizacion" />
                </div>
                <div className="">
                <div className="input-container">
                    <label htmlFor="title">CATEGORÍA</label>
                    <input onChange={handlerTipo} type="text" className="form-control" id="tipo" />
                </div>
             </div>
             <div className="">
                <div className="input-container">
                    <label htmlFor="title">HORARIO</label>
                    <input onChange={handlerHorario} type="text" className="form-control" id="horario" />
                </div>
             </div>
             <div className="">
                <div className="input-container">
                    <label htmlFor="title">PRECIO PROMEDIO</label>
                    <input onChange={handlerPromedio} type="text" className="form-control" id="promedio" />
                </div>
             </div>



            <div className="extra-margin">
                <Link to='/'> <button onClick={ () => {createNegocio(nombre,localizacion,tipo,horario,promedio )}} className="btn btn-primary">Agregar</button></Link>
            </div>   
        
        </div>
            
            
            
        </div>
    )
}

export default CreateForm