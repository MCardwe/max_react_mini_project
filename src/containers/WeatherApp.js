import React, {useState, useEffect, useContext} from 'react';
import WeatherSearch from '../components/WeatherSearch';
import WeatherShow from '../components/WeatherShow';
import LocationContext from '../context/LocationContext';


const WeatherApp = ({handleSelect}) => {

    const {weather} = useContext(LocationContext);

    return (
        <>
            <h2>Here is my weather app, feel free to have a play around!</h2>
            <WeatherSearch handleWeatherSelect={handleSelect}/>
            { weather ? <WeatherShow /> : null}
        </>
    );
}

export default WeatherApp;