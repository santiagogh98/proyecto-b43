import React, { useState, useEffect } from 'react';
import CardActivity from '../components/CardActivity';
import axios from 'axios';
import SearchAc from '../components/SearchAc';
import Actividad from './Actividad';
import PlantillaActividad from '../utils/PlantillaActividad'


const TuristaActividad = () => {
    

    const URL = 'https://turisteapp-1.firebaseio.com/actividad.json';

    const [actividades, setActividades] = useState([]);
    let [actividadesFiltradas,setActividadesFiltradas]=useState([]);
   

    const getActividades = () => {
        axios.get(URL)
        .then((res) => {

         setActividades(res.data)
        transformarDatos(res.data);
        
        }).then((res)=>console.log(actividades))
        .catch((error) => alert(error))       
   
    }
    const transformarDatos=(data)=> {
        setActividades(Object.keys(data).map(id=>data[id]))
        
        
    }
    const buscarActividades=(busqueda)=>{
        
        
        setActividadesFiltradas(actividades.filter(actividades=>
             actividades.localizacion.includes(busqueda)))
            
    }
    
    
    useEffect(() => {
    
        getActividades();
    }, []);

   


   

        
        
               
              

    return (
        <div>
            
            <SearchAc buscarActividades={buscarActividades}/>
            <main className="main">  
            {actividadesFiltradas? 
            actividadesFiltradas.map(actividad=>
                 (<CardActivity 
a
                    nombre={actividad.nombre}
                    localizacion={actividad.localizacion}
                    horario={actividad.horario}
                    costo={actividad.costo}
                    duracion={actividad.duracion}
                    
        
                    />
                    

                
            ) )
            :<h1>No hay negocios en el lugar</h1>
        

            }    
        

                <div className="container pt-4">
                    
                     
                        


                    
                
            
    


                    

                    
                    

                </div>
            </main>
        </div>
    )
    
}

export default TuristaActividad;