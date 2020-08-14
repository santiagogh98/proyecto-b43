import React, { useState, useEffect } from 'react';
import CardActivity from '../components/CardActivity';
import axios from 'axios';
import SearchAc from '../components/SearchAc';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import'./TuristaActivity.css';



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
        <React.Fragment>            
            <NavBar />
            <main className="main h-100 ">
            <section className="jumbotronActivity text-center">
            <hr className="featurette-divider" />
                    <h1>Busca un lugar para descubrirr</h1>
                    <SearchAc buscarActividades={buscarActividades}/>
            </section>
                <div className=" mx-auto ">                
               
                {actividadesFiltradas? 
            actividadesFiltradas.map(actividad=>
                (<CardActivity
                    nombre={actividad.nombre}
                    localizacion={actividad.localizacion}
                    horario={actividad.horario}
                    costo={actividad.costo}
                    duracion={actividad.duracion}                
                    />
                ))
            :<h1>No hay negocios en el lugar</h1>      
            } 
            </div>  
            <Footer />
            </main>            
        
        </React.Fragment>
    )}

export default TuristaActividad;