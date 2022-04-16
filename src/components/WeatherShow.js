import React from 'react';
import WeatherNextWeek from './WeatherNextWeek';
import WeatherToday from './WeatherToday';


const WeatherShow = () => {


    return (
        <div className='weather-show'>
            <WeatherToday />
            <WeatherNextWeek />
        </div>
    );
}

export default WeatherShow;