import React,{useContext} from 'react';
import WeatherNextWeek from './WeatherNextWeek';
import WeatherToday from './WeatherToday';
import LocationContext from '../context/LocationContext';


const WeatherShow = () => {

    const {weather} = useContext(LocationContext);

    const nextWeekNodes = weather.next_days.slice(1).map((day, index) => {
        return <WeatherNextWeek key={index} comment={day.comment}  day={day.day} icon={day.iconURL} max_temp={day.max_temp.c} min_temp={day.min_temp.c} />
    })

    return (
        <div className='weather-show'>
            <WeatherToday />
            <div className='next-week-weather'>
                {nextWeekNodes}
            </div>
        </div>
    );
}

export default WeatherShow;