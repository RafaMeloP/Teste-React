import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import './Corpo.css';

export default props => {
    return (
        <div id="container">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/Explore">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                    <Route path="/sobreNos">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                    <Route exact path="/Seguros">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                    <Route path="/Hoteis">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                </Switch>
            </Router>
            <div id="texto">
                <h1>Sla</h1>
            </div>
        </div>
    )
}