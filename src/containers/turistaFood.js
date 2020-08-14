import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Search from '../components/Search';
import Negocio from './Negocio';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


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
            <NavBar/>
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
            <Footer />
        </React.Fragment>
    )}

export default TuristaFood;