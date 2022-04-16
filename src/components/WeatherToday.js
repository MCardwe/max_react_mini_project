import React,{useContext} from 'react';
import LocationContext from '../context/LocationContext';


const WeatherToday = () => {


    const {weather} = useContext(LocationContext);


    return (
        <div className='weather-today'>
            <p>{weather.region}</p>
            <img src={weather.currentConditions.iconURL} />
            <p>{weather.currentConditions.temp.c}°C</p>
            <p>{weather.currentConditions.comment}</p>
            <p>{weather.currentConditions.dayhour}</p>
            <p>Humidity: {weather.currentConditions.humidity}</p>
            <p>Wind: {weather.currentConditions.wind.mile}mph</p>

        </div>
    );
}

export default WeatherToday;