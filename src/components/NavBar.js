import React from 'react';
import '../containers/Landing.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" style={{fontSize:35+'px'}} to="/">Turisteapp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse" style={{fontSize:20+'px'}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/turista">Turistear <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/negocio">Contacto</Link>
                            </li>                            
                        </ul>
                        <ul className="navbar-nav justify-content">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/SignIn">Iniciar Sesión</Link>                                    
                                </li>
                                <li className="nav-item active"><p className="nav-link">|</p></li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/negocio">Registrarse </Link>                                    
                                </li>
                            </ul>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default NavBar
