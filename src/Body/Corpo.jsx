import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Texto from '../Texto/Texto.jsx';
import Form from '../Form/Form.jsx';
import Dados from '../Dados/Dados.jsx';
import './Corpo.css';

export default class Corpo extends React.Component {
    constructor() {
        super();
        this.state = {
            origem: "",
            destino: "",
            data: "",
            pessoas: 0,
            chaveP: "{",
            chaveF: "}"
        }
    }
    setOrigem = ({ target: { value } }) => {
        this.setState({ origem: value });
    }
    setDestino = ({ target: { value } }) => {
        this.setState({ destino: value });
    }
    setData = ({ target: { value } }) => {
        this.setState({ data: value });
    }
    setPessoas = ({ target: { value } }) => {
        this.setState({ pessoas: value });
    }
    render() {
        return (
            <div>
                <div id="container">
                    <Router>
                        <Nav />
                        <Switch>
                            <Route exact path="/">
                                <Texto />
                                <Form
                                    estado={this.state}
                                    setOrigem={this.setOrigem}
                                    setDestino={this.setDestino}
                                    setData={this.setData}
                                    setPessoas={this.setPessoas}
                                />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <div>
                    <Dados estado={this.state} />
                </div>
            </div>
        )
    }
}