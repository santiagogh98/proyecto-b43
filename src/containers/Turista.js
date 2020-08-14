import React from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import './Landing.css';
import Footer from '../components/Footer';

function Turista() {
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
                        <div className="row">
                            
                            <div className="col-lg-4">
                                <img src='https://c.pxhere.com/photos/a1/58/breads_breakfast_delicious_egg_food_food_plating_fork_jam-959488.jpg!d' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Comida" />
                                <h2>Comer</h2>
                                <p>Comoce los mejores lugares para desayunar comer o cenar, visita restaurantes emblemáticos de la zona y disfruta de un zazón inolvidable.</p>
                                <p><Link className="btn btn-secondary" to="/TuristaFood" role="button">Ver Detalles &raquo;</Link></p>
                            </div>
                            <div className="col-lg-4">
                                <img src='https://www.bubblefootball.es/wp-content/uploads/2016/01/aventura.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Actividad" />
                                <h2>Hacer</h2>
                                <p>Descubre actividades o lugares de interés para conocer, dale una vuelta a éstos sitios llenos de cultura e historia. Arma tus actividades y descubre qué hay de nuevo cerca de ti.</p>
                                <p><Link className="btn btn-secondary" to="/TuristaActivity" role="button">Ver Detalles &raquo;</Link></p>                        </div>
                            <div className="col-lg-4">
                                <img src='https://image.freepik.com/vector-gratis/mapa-ruta-punteros-estilo-plano_23-2147783000.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Mapas" />
                                <h2>Itinerario</h2>
                                <p>Arma un itinerario y sacale provecho al tiempo para conocer el lugar.</p>
                                <p><Link className="btn btn-secondary" to="/turista" role="button">Ver Detalles &raquo;</Link></p>                        </div>
                        </div>
                        <div className="col-lg-4">
                            <img src='https://www.dhresource.com/0x0/f2/albu/g4/M00/F6/E7/rBVaEFePWxSAekMOAAEeNQd30aU401.jpg/large-size-wooden-dice-80mm-multi-colored.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Comida" />
                            <h2>Itinerario Random</h2>
                            <p>Con la opción de itinerario random déjate llevar por nuestras opciones y descubre lo mejor que tenemos para ti.</p>
                            <p><Link className="btn btn-secondary" to="/turista" role="button">Ver Detalles &raquo;</Link></p>
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
