import React from 'react';

const CountrySelect = ({onCountrySelected, countries}) => {

    const handleChange = function (event){
        const country = countries[event.target.value]
        onCountrySelected(country);
    }

    const countryOptions = countries.map ((country, index) => {
        return <option value={index} key={index}>{country.name.common}</option>
    });

    return (
        <div>
            <select onChange={handleChange} defaultValue=''>
            <option value='' >Please select a country</option>
            {countryOptions}
            </select>
        </div>
    );
}

export default CountrySelect