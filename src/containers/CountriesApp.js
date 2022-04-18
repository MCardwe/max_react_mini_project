import React,{useState, useEffect} from 'react';
import CountryInfo from '../components/CountryInfo';
import CountrySelect from '../components/CountrySelect';
import TotalPopulation from '../components/TotalPopulation';


const CountriesApp = () => {

    const [countries, setCountries] = useState([]);
    const [totalPop, setTotalPop] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(null)

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
            .then (response => response.json())
            .then(data => setCountries(data))
    }


    useEffect( () => {
        getCountries();
    }, []);

    const onCountrySelected = (country) => {
        setSelectedCountry(country);
    }

    return (
        <>
            <div className='countries-select'>
                <CountrySelect onCountrySelected={onCountrySelected} countries={countries} />
                <TotalPopulation />
            </div>
            <div className='country-info'>
            {selectedCountry ? <CountryInfo country={selectedCountry}/>: null}
            </div>
        </>
    );
}

export default CountriesApp;