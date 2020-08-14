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
        setNegociosFiltrados(Object.keys(data).map(id=>{return{...data[id],id:id}}))
        
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
                <div className=" mx-auto p-5">  
                <div class="row row-cols-1 row-cols-md-3">              
               
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
            </div>  
            <Footer />
            </main>            
        
        </React.Fragment>
    )
    
}

export default TuristaFood;