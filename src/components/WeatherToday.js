import React,{useContext} from 'react';
import LocationContext from '../context/LocationContext';


const WeatherToday = () => {

    
    const {weather} = useContext(LocationContext);


    return (
        <div className='weather-today'>
            <img src={weather.currentConditions.iconURL} />
        </div>
    );
}

export default WeatherToday;