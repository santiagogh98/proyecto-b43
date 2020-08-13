import React from 'react'
import {Link } from "react-router-dom";

function Turista() {
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
                                <Link class="nav-link" to="/turista">Turista <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Inicio</Link>
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main role="main">
            <hr class="featurette-divider" />
            <div class="container marketing d-flex justify-content-center">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-4">
                        <Link to='/turistaFood'><img src='https://c.pxhere.com/photos/a1/58/breads_breakfast_delicious_egg_food_food_plating_fork_jam-959488.jpg!d' className="bd-placeholder-img rounded-circle" width="140" height="140" /></Link>
                            <h2>Comer</h2>
                        </div>
                        <div class="col-lg-4">
                        <Link to='/turistahacer'><img src='https://www.bubblefootball.es/wp-content/uploads/2016/01/aventura.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" /></Link>
                            <h2>Hacer</h2>
                        </div>
                        
                        <div class="col-lg-4">
                        <Link to='/turistaItinerario'><img src='https://image.freepik.com/vector-gratis/mapa-ruta-punteros-estilo-plano_23-2147783000.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" /></Link>
                            <h2>Itinerario</h2>
                        </div>

                        <div class="col-lg-4">
                        <Link to='/turistaItinerarioR'><img src='https://www.dhresource.com/0x0/f2/albu/g4/M00/F6/E7/rBVaEFePWxSAekMOAAEeNQd30aU401.jpg/large-size-wooden-dice-80mm-multi-colored.jpg' className="bd-placeholder-img rounded-circle" width="140" height="140" /></Link>
                            <h2>Itinerario Random</h2>
                        </div>
                    </div>
                    </div>
                    <hr class="featurette-divider" />

                    <footer class="container">
                    <p class="float-right"><a href="#">Back to top</a></p>
                    <p>&copy; 2020 Turisteapp, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>&middot;  <Link to="/negocio">Negocio</Link></p>
                </footer>


            </main>
            </React.Fragment>
       
       
        // <div className='d-flex flex-column '>
        //     <Link to='/TuristaFood'><button>¿Donde comer?</button></Link>
        //     <Link to='/TuristaFood'><button>¿Qué Hacer?</button></Link>
        //     <Link to='/TuristaFood'><button>Itinerario</button></Link>
        //     <Link to='/TuristaFood'><button>Itinerario Random</button></Link>
            
        // </div>
    )
}

export default Turista
