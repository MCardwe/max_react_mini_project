import React from 'react';


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
        <div>
            <button value='weather' onClick={handleClick}>Weather Button</button>
            <button value='countries' onClick={handleClick}>Countries Button</button>
            <button value='quotes' onClick={handleClick}>GoT Quotes Button</button>
        </div>
    );
}

export default Buttons;