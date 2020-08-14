import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <React.Fragment>
            <main class="text-center">
                <form class="form-signin">
                    <img class="mb-4" src="https://cdn.onlinewebfonts.com/svg/img_25701.png" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Por favor, inicia sesión</h1>
                    <label for="inputEmail" class="sr-only">Correo electrónico</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Correo electrónico" required autofocus />
                    <label for="inputPassword" class="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required />
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Recuérdame
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesión</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2020 &middot;  <Link to="./">Cancelar</Link></p>
                </form>
            </main>
        </React.Fragment>
    )
}

export default SignIn
