import React from 'react';
import "./Form.css";
export default props => {
    return (
        <div className="container">
            <div id="form">
                <div id="radio">
                    <input type="radio" name="IdaVolta" id="IeV" />
                    <label htmlFor="IeV">Ida e Volta</label>
                    <input type="radio" name="IdaVolta" id="I" />
                    <label htmlFor="I">Ida</label>
                    <input type="radio" name="IdaVolta" id="V" />
                    <label htmlFor="V">Volta</label>
                </div>
            </div>
        </div>
    )
}