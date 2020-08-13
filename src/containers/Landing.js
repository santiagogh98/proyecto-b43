import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";



function Landing() {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" style={{fontSize:35+'px'}} href="#">Turisteapp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse" style={{fontSize:20+'px'}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main role="main">
                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='https://www.stantonchase.com/wp-content/uploads/2014/10/00000233-2.jpg' className='d-block w-100' />
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Sé un turista</h1>
                                    <p>¡Crea un itinerario, reserva en un restaurante o visita alguna actividad!</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/turista" role="button">Turistear</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src='https://s-i.huffpost.com/gen/1776916/images/o-SAN-MIGUEL-MEXICO-facebook.jpg' className='d-block w-100' />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src='https://charismaticplanet.com/wp-content/uploads/2015/12/shiprock-sunset-color-new-mexico.jpg' className='d-block w-100' />
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
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
                        <img src='https://c.pxhere.com/photos/a1/58/breads_breakfast_delicious_egg_food_food_plating_fork_jam-959488.jpg!d' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>Comer</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">Ver Detalles &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                        <img src='https://www.bubblefootball.es/wp-content/uploads/2016/01/aventura.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>Hacer</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">Ver Detalles &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                        <img src='https://image.freepik.com/vector-gratis/mapa-ruta-punteros-estilo-plano_23-2147783000.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>Itinerario</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">Ver Detalles &raquo;</a></p>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img src='http://network.icom.museum/uploads/RTEmagicC_popocatepletl-y-ciudad_01.jpg.jpg' className="bd-placeholder-img " width="450" height="450" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                        <img src='https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/Mexico.jpg' className="bd-placeholder-img " width="450" height="450" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img src='https://www.optimomexico.mx/wp-content/uploads/2018/12/500x500-8.jpg' className="bd-placeholder-img " width="450" height="450" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                </div>  
                <footer className="container">
                    <p className="float-right"><a href="#">Back to top</a></p>
                    <p>&copy; 2020 Turisteapp, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>&middot;  <Link to="/negocio">Negocio</Link></p>
                </footer>
            </main>
        </React.Fragment >
        // <div>
        //     <h1>Turisteapp</h1>
        //     <div className='container '>

        //     <Link to="/turista"><button>
        //       Turista
        //     </button>
        //     </Link>

        //     </div>
        //     <div className='container '>

        //     <Link to="/Negocio"><button >Negocio</button>
        //     </Link>


        //     </div>

        // </div>
    )
}

export default Landing
