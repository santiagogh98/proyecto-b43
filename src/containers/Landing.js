import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";



function Landing() {
    return (
        <React.Fragment>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a class="navbar-brand" style={{fontSize:35+'px'}} href="#">Turisteapp</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse" style={{fontSize:20+'px'}}>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main role="main">
                <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src='https://www.stantonchase.com/wp-content/uploads/2014/10/00000233-2.jpg' className='d-block w-100' />
                            <div class="container">
                                <div class="carousel-caption text-left">
                                    <h1>Sé un turista</h1>
                                    <p>¡Crea un itinerario, reserva en un restaurante o visita alguna actividad!</p>
                                    <p><Link class="btn btn-lg btn-primary" to="/turista" role="button">Turistear</Link></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <img src='https://s-i.huffpost.com/gen/1776916/images/o-SAN-MIGUEL-MEXICO-facebook.jpg' className='d-block w-100' />
                            <div class="container">
                                <div class="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <img src='https://charismaticplanet.com/wp-content/uploads/2015/12/shiprock-sunset-color-new-mexico.jpg' className='d-block w-100' />
                            <div class="container">
                                <div class="carousel-caption text-right">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                
                
                <div class="container marketing">
                    <div class="row">
                        <div class="col-lg-4">
                        <img src='https://c.pxhere.com/photos/a1/58/breads_breakfast_delicious_egg_food_food_plating_fork_jam-959488.jpg!d' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>Comer</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">Ver Detalles &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                        <img src='https://www.bubblefootball.es/wp-content/uploads/2016/01/aventura.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>Hacer</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">Ver Detalles &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                        <img src='https://image.freepik.com/vector-gratis/mapa-ruta-punteros-estilo-plano_23-2147783000.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>Itinerario</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">Ver Detalles &raquo;</a></p>
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5">
                        <img src='http://network.icom.museum/uploads/RTEmagicC_popocatepletl-y-ciudad_01.jpg.jpg' className="bd-placeholder-img " width="450" height="450" />
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                            <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5 order-md-1">
                        <img src='https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/Mexico.jpg' className="bd-placeholder-img " width="450" height="450" />
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div class="col-md-5">
                        <img src='https://www.optimomexico.mx/wp-content/uploads/2018/12/500x500-8.jpg' className="bd-placeholder-img " width="450" height="450" />
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                </div>  
                <footer class="container">
                    <p class="float-right"><a href="#">Back to top</a></p>
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
