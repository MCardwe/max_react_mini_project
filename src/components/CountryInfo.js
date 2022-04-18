import React from 'react';


const CountryInfo = ({country}) => {



    return (
        <>
        <div>
            <h3>{country.name.common}</h3>
            <p><strong>Population: </strong>{country.population}</p>
            <p><strong>Capital City: </strong>{country.capital[0]}</p>
            <p><strong>Currency: </strong>{country.currencies.name}</p>
            <p><strong>Languages: </strong></p>
        </div>
            <p>Flag</p>
        </>
    );
}

export default CountryInfo;