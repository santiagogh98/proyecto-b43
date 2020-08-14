import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardActivity from '../components/CardActivity';
import axios from 'axios';
import Search from '../components/Search';



const Random = (props) => {
    
    const {negociosRandom,actividadesRandom}=props.location.state;
    

  

// let arrayNegocios=[];
// arrayNegocios.push(props.location.state.negociosRandom)
    

    // const URL = 'https://turisteapp-1.firebaseio.com/negocio.json';

    // const [negocios, setNegocios] = useState([]);
   
    // let x=parseInt(Math.random()*10);
   
   

    // const getNegocios = () => {
    //     axios.get(URL)
    //     .then((res) => {

    //      setNegocios(res.data)
    //     transformarDatos(res.data);
        
    //     }).then((res)=>console.log())
    //     .catch((error) => alert(error))       
   
    // }
    // const transformarDatos=(data)=> {
    // let datosTransformados=Object.keys(data).map(id=>data[id])
    // setNegociosRandom(datosTransformados[x])
        
        
    // }  
  
  
    
    
    // useEffect(() => {
    
       
    //     getNegocios();
    // }, []);

   

        
        
               
              

    return (
        <div>
           

{negociosRandom? 
            negociosRandom.map(negocio=>
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
              {actividadesRandom? 
            actividadesRandom.map(actividad=>
                 (<CardActivity

                    nombre={actividad.nombre}
                    localizacion={actividad.localizacion}
                    horario={actividad.tipo}
                    costo={actividad.horario}
                    duracion={actividad.promedio}
        
                    />

                
            ) )
            :<h1>No hay negocios en el lugar</h1>
        

            }    
           
                    
                
              
        </div>
    )
    
}

export default Random;