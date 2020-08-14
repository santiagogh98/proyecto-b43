import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardActivity from '../components/CardActivity';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Random.css'
const Random = (props) => {
    const { negociosRandom, actividadesRandom } = props.location.state;
    return (
        <React.Fragment>
            <NavBar />
            <main className="main h-100 ">
                <section className="jumbotronRandom text-center">
                    <hr className="featurette-divider" />
                    <h1>Itinerario Random, diviértete</h1>
                </section>
                <div className=" mx-auto p-5">
                    <div class="row row-cols-1 row-cols-md-3">

                        {actividadesRandom ?
                            actividadesRandom.map(actividad =>
                                (<CardActivity

                                    nombre={actividad.nombre}
                                    localizacion={actividad.localizacion}
                                    horario={actividad.tipo}
                                    costo={actividad.horario}
                                    duracion={actividad.promedio}
                                />
                                ))
                            : <h1>No hay negocios en el lugar</h1>

                        }
                        {negociosRandom ?
                            negociosRandom.map(negocio =>
                                (<Card
                                    nombre={negocio.nombre}
                                    localizacion={negocio.localizacion}
                                    tipo={negocio.tipo}
                                    horario={negocio.horario}
                                    promedio={negocio.promedio}

                                />


                                ))
                            : <h1>No hay negocios en el lugar</h1>


                        }
                    </div>
                </div>
                <Footer />
            </main>
        </React.Fragment>
    )

}

export default Random;