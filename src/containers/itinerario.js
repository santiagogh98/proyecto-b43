import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Itinerario.css'

const Itinerario = (props) => {

    const { nombre, localizacion, tipo, horario,promedio,id} = props;
         let [negociosFiltrados,setNegociosFiltrados]=useState([]);
    return (
        <div>
            <NavBar />
            <section className="jumbotronItinerario text-center">
                    <hr className="featurette-divider" />
                    <h1>Itinerario</h1>
                </section>
            {negociosFiltrados? 
            negociosFiltrados.map(negocio=>
                 (<Card

                    nombre={negocio.nombre}
                    localizacion={negocio.localizacion}
                    tipo={negocio.tipo}
                    horario={negocio.horario}
                    promedio={negocio.promedio}
        
                    />

                
            ) )
            :<h1>No hay negocios en el lugar</h1>
        

            }  
            <Footer />

        </div>
        
    )
}

export default Itinerario
