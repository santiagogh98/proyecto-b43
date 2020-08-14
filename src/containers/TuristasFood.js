import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Search from '../components/Search';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import'./TuristaFood.css';

const TuristaFood = () => {
    

    const URL = 'https://turisteapp-1.firebaseio.com/negocio.json';

    const [negocios, setNegocios] = useState([]);
    let [negociosFiltrados,setNegociosFiltrados]=useState([]);
   

    const getNegocios = () => {
        axios.get(URL)
        .then((res) => {

         setNegocios(res.data)
        transformarDatos(res.data);
        
        }).then((res)=>console.log(negocios))
        .catch((error) => alert(error))       
   
    }
    const transformarDatos=(data)=> {
        setNegocios(Object.keys(data).map(id=>data[id]))
        
    }
    const buscarNegocios=(busqueda)=>{
        
        
        setNegociosFiltrados(negocios.filter(negocios=>
             negocios.localizacion.includes(busqueda)))
            
    }
    
    
    useEffect(() => {
    
        getNegocios();
    }, []);

    return (
        <React.Fragment>            
            <NavBar />
            <main className="main h-100 ">
            <section className="jumbotronFood text-center">
            <hr className="featurette-divider" />
                    <h1>Busca un lugar para comer</h1>
                    <Search buscarNegocios={buscarNegocios}/> 
            </section>
                <div className=" mx-auto ">                
               
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
            <Footer />
            </main>            
        
        </React.Fragment>
    )
    
}

export default TuristaFood;