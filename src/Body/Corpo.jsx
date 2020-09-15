import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Texto from '../Texto/Texto.jsx';
import Form from '../Form/Form.jsx';
import './Corpo.css';

export default props => {
    return (
        <div id="container">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Texto />
                        <Form />
                    </Route>
                    <Route path="/Explore">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                    <Route path="/sobreNos">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                    <Route path="/Seguros">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                    <Route path="/Hoteis">
                        <h1>Página ainda inexistente</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}