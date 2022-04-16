import React, {useState} from 'react';


const WeatherSearch = ({handleSelect}) => {

    const [locationInput, setLocationInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSelect(locationInput)
        setLocationInput('')
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