import React from 'react';
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className='container'>       

        <Weather />

        <footer>
          This project was coded by Patricia Tanaka and it is open-sourced on
        {" "}<a href='https://github.com/tanakapat/react-weather-project' target='blank'>Github</a>
        </footer>
      </div>
    </div>
  );
}


