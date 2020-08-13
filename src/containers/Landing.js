import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';



function Landing() {
    return (
        <React.Fragment>
            <NavBar/>            
            <main role="main">
                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='https://www.stantonchase.com/wp-content/uploads/2014/10/00000233-2.jpg' className='d-block w-100' alt="BellasArtes"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Sé un turista</h1>
                                    <p>¡Crea un itinerario, reserva en un restaurante o visita alguna actividad!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/turista" role="button">Turistear</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src='https://bloghoteles.com.mx/wp-content/uploads/2018/12/shutterstock_640626874.jpg' className='d-block w-100'alt="Playa" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Conoce los lugares más hermosos.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/Chichen_Itza_1.jpg' className='d-block w-100' alt="Ruinas Chichen Itza"/>
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>Explora tu cultura</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                
                
                <div className="container marketing">
                    <div className="row">
                        <div className="col-lg-4">
                        <img src='https://c.pxhere.com/photos/a1/58/breads_breakfast_delicious_egg_food_food_plating_fork_jam-959488.jpg!d' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Comida"/>
                            <h2>Comer</h2>
                            <p>Comoce los mejores lugares para desayunar comer o cenar, visita restaurantes emblemáticos de la zona y disfruta de un zazón inolvidable.</p>
                            <p><Link className="btn btn-secondary" to="/turista" role="button">Ver Detalles &raquo;</Link></p>
                        </div>
                        <div className="col-lg-4">
                        <img src='https://www.bubblefootball.es/wp-content/uploads/2016/01/aventura.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Actividad"/>
                            <h2>Hacer</h2>
                            <p>Descubre actividades o lugares de interés para conocer, dale una vuelta a éstos sitios llenos de cultura e historia. Arma tus actividades y descubre qué hay de nuevo cerca de ti.</p>
                            <p><Link className="btn btn-secondary" to="/turista" role="button">Ver Detalles &raquo;</Link></p>                        </div>
                        <div className="col-lg-4">
                        <img src='https://image.freepik.com/vector-gratis/mapa-ruta-punteros-estilo-plano_23-2147783000.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Mapas"/>
                            <h2>Itinerario</h2>
                            <p>Arma un itinerario y sacale provecho al tiempo para conocer el lugar. Con la opción de itinerario random déjate llevar por nuestras opciones y descubre lo mejor que tenemos para ti.</p>
                            <p><Link className="btn btn-secondary" to="/turista" role="button">Ver Detalles &raquo;</Link></p>                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Conoce nuevos lugares <span class="text-muted">No te decepcionarán.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img src='http://network.icom.museum/uploads/RTEmagicC_popocatepletl-y-ciudad_01.jpg.jpg' className="bd-placeholder-img " width="450" height="450" alt="Montaña"/>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Obten una nueva perspectiva <span class="text-muted">del lugar donde vives.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                        <img src='https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/Mexico.jpg' className="bd-placeholder-img " width="450" height="450" alt="Angel de Reforma" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Conoce, diviertete, explora<span class="text-muted">, siempre llega algo nuevo.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img src='https://www.optimomexico.mx/wp-content/uploads/2018/12/500x500-8.jpg' className="bd-placeholder-img " width="450" height="450" alt="Mujer Saltando"/>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                </div>  
                <footer className="container">
                    <p className="float-right"><a href="/">Volver arriba</a></p>
                    <p>&copy; 2020 Turisteapp, Inc. &middot; <a href="/">Privacidad</a> &middot; <a href="/">Terminos</a> &middot;  <Link to="/negocio">Negocio</Link></p>
                </footer>
            </main>
        </React.Fragment >
    
    )
}

export default Landing
