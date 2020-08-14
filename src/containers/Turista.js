import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import './Landing.css';
import Footer from '../components/Footer';
import axios from 'axios';

function Turista() {
    const URL2 = 'https://turisteapp-1.firebaseio.com/actividad.json';

    const [actividades, setActividades] = useState([]);
    let [actividadesRandom,setActividadesRandom]=useState([]);
   

    const getActividades = () => {
        axios.get(URL2)
        .then((res) => {

         setActividades(res.data)
        transformarDatos(res.data);
        
        }).then((res)=>console.log(actividades))
        .catch((error) => alert(error))       
   
    }
    const transformarDatos2=(data)=> {
        let datosTransformados2=Object.keys(data).map(id=>data[id])
        let arreglo2=[];
        for(let a=0;arreglo2.length<2;a++){
            let y=parseInt(Math.random()*10);
            if(a==0 || !arreglo2.includes(y)){
                arreglo2.push(y)
    
            }
           
    
        }
        console.log(arreglo2)
        for(let a=0;a<2;a++){
            
            actividadesRandom.push(datosTransformados2[arreglo2[a]])
    
    
    
        }            
        } 
    useEffect(() => {
    
        getActividades();
    }, []);

    const URL = 'https://turisteapp-1.firebaseio.com/negocio.json';

    const [negocios, setNegocios] = useState([]);
    let [negociosRandom,setNegociosRandom]=useState([]);
   
   

    const getNegocios = () => {
        axios.get(URL)
        .then((res) => {

         setNegocios(res.data)
        transformarDatos(res.data);
        
        }).then((res)=>console.log())
        .catch((error) => alert(error))       
   
    }
    const transformarDatos=(data)=> {
    let datosTransformados=Object.keys(data).map(id=>data[id])
    let arreglo=[];
    for(let i=0;arreglo.length<3;i++){
        let x=parseInt(Math.random()*10);
        if(i==0 || !arreglo.includes(x)){
            arreglo.push(x)

        }
       

    }
    console.log(arreglo)
    for(let i=0;i<3;i++){
        
        negociosRandom.push(datosTransformados[arreglo[i]])



    }
    // setNegociosRandom(datosTransformados[x])
    //     console.log(negociosRandom)
        
    }  
  
  
    
    
    useEffect(() => {
    
       
        getNegocios();
    }, []);




    return (
        <React.Fragment>
            <NavBar />
            <section className="jumbotron w-100 h-20">
                <div className="container">
                    <h1>Turistea, conoce, explora.</h1>                    
                </div>
            </section>            
            <main role="main">
                <div class="container marketing d-flex justify-content-center">
                    <div class="row d-flex justify-content-center">
                        <div className="row ">                            
                            <div className="col-lg-4">
                                <Link to='/TuristaFood'><img  src='https://c.pxhere.com/photos/a1/58/breads_breakfast_delicious_egg_food_food_plating_fork_jam-959488.jpg!d' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Comida" /></Link>
                                <h2>Comer</h2>
                                <p>Comoce los mejores lugares para desayunar comer o cenar, visita restaurantes emblemáticos de la zona y disfruta de un zazón inolvidable.</p>
                                <p><Link className="btn btn-info" to="/TuristaFood" role="button">Ir a</Link></p>
                            </div>
                            <div className="col-lg-4">
                                <Link to='/TuristaActivity'>                                <img src='https://www.bubblefootball.es/wp-content/uploads/2016/01/aventura.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Actividad" /></Link>
                                <h2>Hacer</h2>
                                <p>Descubre actividades o lugares de interés para conocer, dale una vuelta a éstos sitios llenos de cultura e historia. Arma tus actividades y descubre qué hay de nuevo cerca de ti.</p>
                                <p><Link className="btn btn-info" to="/TuristaActivity" role="button">Ir a</Link></p>                        </div>
                            <div className="col-lg-4">
                               <Link to='/Itinerario'> <img src='https://image.freepik.com/vector-gratis/mapa-ruta-punteros-estilo-plano_23-2147783000.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Mapas" /></Link>                               <h2>Itinerario</h2>
                                <p>Arma un itinerario y sacale provecho al tiempo para conocer el lugar.</p>
                                <p><Link className="btn btn-info" to="/Itinerario" role="button">Ir a</Link></p>                        </div>
                        </div>
                        <div className="col-lg-4">
                            <Link to={{pathname:'/Random',state:{negociosRandom:negociosRandom,actividadesRandom:actividadesRandom}}} >
                            <img src='https://www.dhresource.com/0x0/f2/albu/g4/M00/F6/E7/rBVaEFePWxSAekMOAAEeNQd30aU401.jpg/large-size-wooden-dice-80mm-multi-colored.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Comida" />
 </Link>                           <h2>Itinerario Random</h2>
                            <p>Con la opción de itinerario random déjate llevar por nuestras opciones y descubre lo mejor que tenemos para ti.</p>
                            <p><Link className="btn btn-info" to={{pathname:'/Random',state:{negociosRandom:negociosRandom,actividadesRandom:actividadesRandom}}} role="button">Ir a</Link></p>
                        </div>
                    </div>
                </div>
                <hr class="featurette-divider" />
                <Footer />
            </main>
        </React.Fragment>
    )
}

export default Turista
