import React from 'react';

import './style.css';
import './fonts/font-awesome.min.css';
import WeatherFindLocation from './WeatherFindLocation';
import WeatherToday from './WeatherToday';
import WeatherNextDays from './WeatherNextDays';
import WeatherOtherContent from './WeatherOtherContent';
import WeatherHeader from './WeatherHeader';

function WeatherInfoPage(props) {
  return (
    
      <div className="site-content">

        <WeatherHeader />

        <WeatherFindLocation />
          
        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">

              <WeatherToday weatherData={props.weatherData} />

              <WeatherNextDays />
             
            </div>
          </div>
        </div>

        <WeatherOtherContent />

      </div>
    
  );
}

export default WeatherInfoPage;
