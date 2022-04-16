import React,{useContext} from 'react';
import LocationContext from '../context/LocationContext';


const WeatherNextWeek = ({comment, day, icon, max_temp, min_temp}) => {

    
    return (
        <div className='single-day-weather'>
            <p>{day}</p>
            <p><img src={icon}/></p>
            <p>{comment}</p>
            <p>Max: {max_temp}°C</p>
            <p>Min: {min_temp}°C</p>
        </div>
    );
}

export default WeatherNextWeek;