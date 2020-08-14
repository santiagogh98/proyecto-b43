import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <React.Fragment>
                <footer className="container sticky-bottom">
                    <p className="float-right"><a href="#">Volver arriba</a></p>
                    <p>&copy; 2020 Turisteapp, Inc. &middot; <a href="/">Privacidad</a> &middot; <a href="/">Terminos</a> &middot;  <Link to="/negocio">Negocio</Link></p>
                </footer>
        </React.Fragment>
    )
}

export default Footer
