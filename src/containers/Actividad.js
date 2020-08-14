import React from 'react'
import CreateFormAc from '../components/CreateFormAc'
import axios from 'axios';

const Actividad = () => {

    const createActividad = (nombre,localizacion,horario,costo,duracion) => {
        const URL = 'https://turisteapp-1.firebaseio.com/actividad.json';

        let newActividad = {nombre :nombre, localizacion : localizacion,horario:horario,costo:costo,duracio:duracion } ;
        axios.post(URL, newActividad)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }


    return (
        <React.Fragment>
            <main className="main">
                <div className="container pt-4">
                    <CreateFormAc createActividad={createActividad}/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Actividad
