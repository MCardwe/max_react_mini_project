import React, {useContext, useState} from 'react';
import LocationContext from '../context/LocationContext';


const WeatherSearch = ({handleSelect}) => {

    const [locationInput, setLocationInput] = useState('')

    const {changeLoaded} = useContext(LocationContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        changeLoaded();
        handleSelect(locationInput);
        setLocationInput('');
    }
    
    const handleInput = (event) => {
        setLocationInput(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={locationInput} onChange={handleInput} placeholder='Search Location'/>
                <button type='submit'>Search</button>
            </form>
        </>
    );
}

export default WeatherSearch;