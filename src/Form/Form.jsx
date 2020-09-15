import React from 'react';
import "./Form.css";
export default props => {
    return (
        <div className="container form">
            <div id="form">
                <div id="radio">
                    <div className="radio">
                        <input type="radio" name="IdaVolta" id="IeV" className="opc" />
                        <label htmlFor="IeV">Ida e Volta</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="IdaVolta" id="I" className="opc" />
                        <label htmlFor="I">Ida</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="IdaVolta" id="V" className="opc" />
                        <label htmlFor="V">Volta</label>
                    </div>
                </div>
                <div id="dados">
                    <div className="dado">
                        <small>Origem</small>
                        <div className="img">
                            <span><img src="./Icon/Image.svg" alt="Imagem" /></span>
                            <input type="text" name="origem" id="origem" placeholder="São Paulo, Brazil" />
                        </div>
                    </div>
                    <div className="dado">
                        <small>Destino</small>
                        <div className="img">
                            <span><img src="./Icon/Place.svg" alt="Localização" /></span>
                            <input type="text" name="destino" id="destino" placeholder="Insira a cidade ou destino" />
                        </div>
                    </div>
                    <div className="dado">
                        <small>Data de ida / Retorno</small>
                        <div className="img">
                            <span><img src="./Icon/Date.svg" alt="Calendário" /></span>
                            <input type="text" name="data" id="data" placeholder="Sábado 14/4 - Quinta 19/4" />
                        </div>
                    </div>
                    <div className="dado">
                        <small>Número de Pessoas</small>
                        <div className="img">
                            <span><img src="./Icon/Person.svg" alt="Pessoa" /></span>
                            <input type="text" name="nPessoas" id="nPessoas" placeholder="1 Pessoa" />
                        </div>
                    </div>
                </div>
                <div id="botao">
                    <button>
                        <span><img src="./Icon/Search.svg" alt="Pesquisa" /></span>
                        Busque as viagens
                    </button>
                </div>
            </div>
        </div>
    )
}