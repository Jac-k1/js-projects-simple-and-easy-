import React from 'react';
import './weather.css';
import { useState } from 'react';


import search_icon from './images/search.png';
import humidity_icon from './images/humidity.png';
import wind_icon from './images/wind.png';

import drizzle_icon from './images/drizzle.png';
import cloud_icon from './images/cloud.png';
import rain_icon from './images/rain.png';
import snow_icon from './images/snow.png';
import clear_icon from './images/clear.png';


const api = process.env.REACT_APP_KEY



const Weather = () => {  


    const [weathericon, seticon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName('search');
        if (element[0].value === '') {
            alert('Please enter a city');
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=imperial&appid=${api}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-value');
        const wind = document.getElementsByClassName('wind-value');
        const temp = document.getElementsByClassName('temp');
        const location = document.getElementsByClassName('location');

        humidity[0].innerHTML = data.main.humidity + '%';
        wind[0].innerHTML = data.wind.speed + ' mph';
        temp[0].innerHTML = Math.round(data.main.temp) + '°';
        location[0].innerHTML = data.name;


        if (data.weather[0].main === 'Clouds') {
            seticon(cloud_icon);
        } else if (data.weather[0].main === 'Clear') {
            seticon(clear_icon);
        }
        else if (data.weather[0].main === 'Rain') {
            seticon(rain_icon);
        }
        else if (data.weather[0].main === 'Snow') {
            seticon(snow_icon);
        }
        else if (data.weather[0].main === 'Drizzle') {
            seticon(drizzle_icon);
        }
        else {
            seticon(cloud_icon);
        }


        console.log(data);
    }

    return (

        <div className='container'>
            <div className='title'>What's The Weather?</div>
            <div className= 'topbox'>
                <input type='text' className='search' placeholder='Atlanta'></input>
                <div className='search-icon' onClick={()=>{search()}}>
                    <img src={search_icon}></img>
                </div>
            </div>
            <div className='weather-box'>
                <img src={weathericon} className='weather-icon'></img>
            </div>
            <div className='temp'>70°</div>
            <div className='location'>Atlanta</div>

            <div className='extra'>
                <div className='box'>
                    <img src={humidity_icon}></img>
                    <div className='data'>
                        <div className='humidity'>Humidity</div>
                        <div className='humidity-value'>50%</div>
                    </div>
                </div>

                <div className='box'>
                    <img src={wind_icon}></img>
                    <div className='data'>
                        <div className='wind'>Wind</div>
                        <div className='wind-value'>10 mph</div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Weather;