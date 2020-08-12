import React from 'react'
import {Link } from "react-router-dom";



function Landing() {
    return (
        <div>
            <h1>Turisteapp</h1>
            <div className='container '>
                
            <Link to="/turista"><button>
              Turista
            </button>
            </Link>

            </div>
            <div className='container '>

            <Link to="/Negocio"><button type="button" className="btn btn-secondary">Negocio</button>
            </Link>


            </div>
            
        </div>
    )
}

export default Landing
