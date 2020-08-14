import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';



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
                                    <h1>Sé un turista siempre</h1>
                                    <p>¡Crea tu itinerario, reserva experiencias para ti y tus seres queridos!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/turista" role="button">Planea ahora</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src='https://bloghoteles.com.mx/wp-content/uploads/2018/12/shutterstock_640626874.jpg' className='d-block w-100'alt="Playa" />
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Conoce los lugares más hermosos.</h1>
                                    <p>¡Crea tu itinerario, reserva experiencias para ti y tus seres queridos!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/turista" role="button">Planea ahora</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/Chichen_Itza_1.jpg' className='d-block w-100' alt="Ruinas Chichen Itza"/>
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Explora tu cultura</h1>
                                    <p>¡Crea tu itinerario, reserva experiencias para ti y tus seres queridos!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/turista" role="button">Planea ahora</Link></p>
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
                <Footer />  
                
            </main>
        </React.Fragment >
    
    )
}

export default Landing