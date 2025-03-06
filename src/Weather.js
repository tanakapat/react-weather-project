import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="Weather">

      <form>

        <div className="row">

          <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control" 
            autoFocu="on"/>
          </div>

          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>

        </div>
      
      </form>
   
    
        <h1>Stockholm</h1>
          
          <ul>
            <li>Monday 22:11</li>
            <li>Clear</li>
          </ul>
          
        <div className="row mt-3">

          <div className="col-6"> 
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" ></img>   
            <span className="temperature">8</span>
            <span className="unit">ºC</span>                              
          </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 74%</li>
            <li>Wind: 31 km/h</li>
          </ul>
        </div>

      </div>
        
    </div>
  )
}