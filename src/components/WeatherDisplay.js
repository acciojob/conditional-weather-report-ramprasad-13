import React from "react";

function WeatherDisplay(props){
    const {temperature, conditions} = props;
    const colour = temperature> 20? 'red': 'blue';
    return (
    <>
        <p>Temperature: <span style={{color:colour}}>{temperature}</span></p> 
        <p>Conditions: {conditions}</p>
    </>
    )

}
export default WeatherDisplay;