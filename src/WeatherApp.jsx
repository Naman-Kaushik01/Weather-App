import "./WeatherApp.css";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 36.52,
        humadity: 80,
        temp: 29.62,
        tempMax:29.62,
        tempMin:29.62, 
        weather:"light rain",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div className="WeatherApp"> <h2>Weather App</h2>
        <SearchBox updateInfo ={updateInfo}/>
        <InfoBox info={weatherInfo}/>

        </div>
        
    )

}