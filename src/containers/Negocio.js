import React from 'react'
import CreateForm from '../components/CreateForm'
import axios from 'axios';
import NavBar from '../components/NavBar';

const Negocio = () => {

    const createNegocio = (nombre,localizacion,tipo,horario,promedio) => {
        const URL = 'https://turisteapp-1.firebaseio.com/negocio.json';

        let newNegocio = {nombre :nombre, localizacion : localizacion, tipo:tipo,horario:horario,promedio:promedio } ;
        axios.post(URL, newNegocio)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }


    return (
        <React.Fragment>
            <NavBar />
            <main className="main">
                <div className="container pt-4">
                    <CreateForm createNegocio={createNegocio}/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Negocio
