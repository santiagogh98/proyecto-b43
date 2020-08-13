import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Search from '../components/Search';
import Negocio from './Negocio';
import { Link } from "react-router-dom";


const TuristaFood = () => {


    const URL = 'https://turisteapp-1.firebaseio.com/negocio.json';

    const [negocios, setNegocios] = useState([]);
    let [negociosFiltrados, setNegociosFiltrados] = useState([]);


    const getNegocios = () => {
        axios.get(URL)
            .then((res) => {

                setNegocios(res.data)
                transformarDatos(res.data);

            }).then((res) => console.log(negocios))
            .catch((error) => alert(error))

    }
    const transformarDatos = (data) => {
        setNegocios(Object.keys(data).map(id => data[id]))

    }
    const buscarNegocios = (busqueda) => {


        setNegociosFiltrados(negocios.filter(negocios =>
            negocios.localizacion.includes(busqueda)))

    }


    useEffect(() => {

        getNegocios();
    }, []);

    return (
        <React.Fragment>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a class="navbar-brand" style={{ fontSize: 35 + 'px' }} href="#">Turisteapp</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse" style={{ fontSize: 20 + 'px' }}>
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                                <Link class="nav-link" to="/turistaFood">Comida <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link" to="/turista">Atrás <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link" to="/">Inicio</Link>
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <hr class="featurette-divider" />

            <div>

                <Search buscarNegocios={buscarNegocios} />
                <main className="main">
                    {negociosFiltrados ?
                        negociosFiltrados.map(negocio =>
                            (<Card

                                nombre={negocio.nombre}
                                localizacion={negocio.localizacion}
                                tipo={negocio.tipo}
                                horario={negocio.tipo}
                                promedio={negocio.promedio}

                            />


                            ))
                        : <h1>No hay negocios en el lugar</h1>


                    }


                    <div className="container pt-4">

                    </div>
                </main>
            </div>
        </React.Fragment>
    )

}

export default TuristaFood;