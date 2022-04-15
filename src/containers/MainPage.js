import React, {useState} from 'react';
import Buttons from '../components/Buttons';
import CountriesApp from './CountriesApp';
import GoTQuotesApp from './GoTQuotesApp';
import WeatherApp from './WeatherApp';

const MainPage = () => {


    const [weatherClicked, setWeatherClicked] = useState(false);
    const [countriesClicked, setCountriesClicked] = useState(false);
    const [gotQuotesClicked, setGotQuotesClicked] = useState(false);

    const handleWeatherClick = () => {
        setCountriesClicked(false);
        setGotQuotesClicked(false);
        setWeatherClicked(true);
    }

    const handleCountriesClick = () => {
        setGotQuotesClicked(false);
        setWeatherClicked(false);
        setCountriesClicked(true);
    }

    const handleQuotesClick = () => {
        setCountriesClicked(false);
        setWeatherClicked(false);
        setGotQuotesClicked(true);
    }

    

    return (
        <>
            <Buttons CountriesClick={handleCountriesClick} QuotesClick={handleQuotesClick} WeatherClick={handleWeatherClick}/>
            { weatherClicked ? <WeatherApp /> : null}
            { countriesClicked ? <CountriesApp /> : null}
            { gotQuotesClicked ? <GoTQuotesApp /> : null}
        </>
    );
}

export default MainPage