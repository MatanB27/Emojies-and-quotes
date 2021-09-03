import React from 'react';

function WeatherTicket(props){

    const iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    return(
        <div className='weather-ticket'>
            <img src={iconUrl} alt="icon"/>
            <h2>{props.desc}</h2>
            <h3>{props.time}</h3>
        </div>
    );
}

export default WeatherTicket;