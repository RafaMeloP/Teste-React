import React from 'react';
import './Dados.css';
export default props => {
    return (
        <div className="contain">
            <div id="cont">
                <div>
                    <h2>VALOR DO FORM</h2>
                    {props.estado.chaveP}<br />
                    <div id="texto">
                        <p>

                            "origem" :  "{props.estado.origem}",<br />
                        "destino" :  "{props.estado.destino}",<br />
                        "data" :  "{props.estado.data}",<br />
                        "pessoas" :  {props.estado.pessoas}<br />

                        </p>
                    </div>
                    {props.estado.chaveF}
                </div>
            </div>
        </div>
    )
}