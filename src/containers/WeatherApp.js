import React, {useState, useEffect, useContext} from 'react';
import WeatherSearch from '../components/WeatherSearch';
import WeatherShow from '../components/WeatherShow';
import LocationContext from '../context/LocationContext';


const WeatherApp = ({handleSelect}) => {

    const {weather} = useContext(LocationContext);

    return (
        <>
            <h2>Here is my weather app, feel free to have a play around!</h2>
            <WeatherSearch handleSelect={handleSelect}/>
            { weather ? <WeatherShow /> : <h2>Loading...</h2>}
        </>
    );
}

export default WeatherApp;