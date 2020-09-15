import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

export default props => {
    return (
        <div className="container">
            <div id="barra">
                <div id="menu">
                    <img src="Icon/Logo.svg" alt="Logo" />
                    <div className="menu">
                        <Link to="/Explore">
                            Explore
                        </Link>
                        <Link to="/sobreNos">
                            Sobre Nós
                        </Link>
                        <Link to="/Seguros">
                            Seguros
                        </Link>
                        <Link to="/Hoteis">
                            Hotéis
                        </Link>
                    </div>
                </div>
                <div id="login">
                    <Link to="/">
                        Viagens
                    </Link>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}