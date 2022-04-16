import React,{useContext} from 'react';
import WeatherNextWeek from './WeatherNextWeek';
import WeatherToday from './WeatherToday';
import LocationContext from '../context/LocationContext';


const WeatherShow = () => {

    
    return (
        <div className='weather-show'>
            <WeatherToday />
            <WeatherNextWeek />
        </div>
    );
}

export default WeatherShow;