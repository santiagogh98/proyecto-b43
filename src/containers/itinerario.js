import React, { useState, useEffect } from 'react';
import Card from '../components/Card'

const Itinerario = (props) => {

    const { nombre, localizacion, tipo, horario,promedio,id} = props;
         let [negociosFiltrados,setNegociosFiltrados]=useState([]);



   


    return (
        <div>
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

        </div>
        
    )
}

export default Itinerario
