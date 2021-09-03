import React from 'react';

function WeatherCities(props){
    return(
            <div className='city-item' type='button'
            onClick={props.onClick}>
                <h2>{props.city}</h2>
            </div>
    );
}

export default WeatherCities;