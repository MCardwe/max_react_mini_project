import React, {useState, useEffect} from 'react';
import Buttons from '../components/Buttons';
import CountriesApp from './CountriesApp';
import GoTQuotesApp from './GoTQuotesApp';
import WeatherApp from './WeatherApp';
import LocationContext from '../context/LocationContext';

const MainPage = () => {

    const [location, setLocation] = useState('edinburgh');
    const [weather, setWeather] = useState(null);
    const [loaded, setLoaded] = useState(false)

    const getWeather = () => {
        fetch("https://weatherdbi.herokuapp.com/data/weather/" + location)
        .then(response => response.json())
        .then(data => setWeather(data));
    }
    useEffect(() => {
        getWeather();
    }, [location])

    useEffect(() => {
        changeLoaded()
    },[weather]);
    
    const handleWeatherSelect = (location) => {
        setLocation(location);
    }

    const changeLoaded = () => {
        setLoaded(true);
    }

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
        <div className='main-page'>
            { loaded ? <Buttons CountriesClick={handleCountriesClick} QuotesClick={handleQuotesClick} WeatherClick={handleWeatherClick}/> : null}
            <LocationContext.Provider value={{weather, loaded, changeLoaded}}>
            { weatherClicked ? <WeatherApp handleSelect={handleWeatherSelect}/> : null}
            </LocationContext.Provider>
            { countriesClicked ? <CountriesApp /> : null}
            { gotQuotesClicked ? <GoTQuotesApp /> : null}
        </div>
    );
}

export default MainPage