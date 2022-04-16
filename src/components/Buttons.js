import React from 'react';
import styled from 'styled-components';


const Buttons = ({CountriesClick, QuotesClick, WeatherClick}) => {

    const handleClick = (event) => {
        let clicked = event.target.value;

        if (clicked == 'weather') {
            WeatherClick();
        } else if (clicked == 'quotes') {
            QuotesClick();
        } else  {
            CountriesClick();
        }
    }


    return (
        <div className='buttons'>
            <button value='weather' onClick={handleClick}>Weather App</button>
            <button value='countries' onClick={handleClick}>Countries App</button>
            <button value='quotes' onClick={handleClick}>GoT Quotes App</button>
        </div>
    );
}

export default Buttons;