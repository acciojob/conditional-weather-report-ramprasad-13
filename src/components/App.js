
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const App = () => {
  const [weatherInput, setWeatherInput] = useState({ temperature: 25, conditions: "Sunny" });

  function handleWeatherUpdate(weather){
    setWeatherInput(weather)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay 
        updateWeather = {handleWeatherUpdate}
        temperature = {weatherInput.temperature} 
        conditions = {weatherInput.conditions} 
        />
    </div>
  )
}

export default App
