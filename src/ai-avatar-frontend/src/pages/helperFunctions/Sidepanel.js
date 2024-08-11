import React from 'react';
import  img_astrid  from '../static/astrid_seeger.png';
import  img_michael  from '../static/michael_schulze.png';
import  img_lieselotte  from '../static/lieselotte_daenger.png';

const Sidepanel = ({ vignetteName, apiKey, handleApiKeyChange }) => {
    const renderImage = (vignetteName) => {
        switch (vignetteName) {
            case "Michael Schulze":
                return <img src={img_michael} className="img-fluid rounded" alt="Michael Schulze" />;
            case "Astrid Seeger":
                return <img src={img_astrid} className="img-fluid rounded" alt="Astrid Seeger" />;
            case "Lieselotte Dänger":
                return <img src={img_lieselotte} className="img-fluid rounded" alt="Lieselotte Dänger" />;
            default:
                return <div></div>;
        }
    };

    return (
        <div>
            <h1 style={{ margin: "20px" }}>{vignetteName}</h1>
            {renderImage(vignetteName)}
            <div className="row mt-3">
                <div className="mb-3">
                    <label htmlFor="apiKeyInput" className="form-label" style={{ display: 'flex', alignItems: 'center' }}>
                        <h4 style={{ margin: "0 10px 0 0" }}>API Key</h4>
                        <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Der API-Key kann der LimeSurvey Umfrage entnommen werden.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                        </span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="apiKeyInput"
                        placeholder="Hier Key einfügen"
                        value={apiKey}
                        onChange={handleApiKeyChange}
                    />
                </div>
            </div>
        </div>
    );
};
export default Sidepanel;