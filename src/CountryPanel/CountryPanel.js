import React from 'react';
import "./CountryPanel.css";

const countryPanel = ( props ) => {
    return (
        <div className="CountryPanel">{props.name}</div>
    );
}

export default countryPanel;