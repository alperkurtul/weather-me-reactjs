import React from 'react';
import decideIcon from './DecideIcon';

const weatherCurrent = (props) => {

  return (
          
    <div className="today forecast">
        <div className="forecast-header">
            <div className="date">&nbsp;</div>
            <div className="day">{props.date} {props.month}&nbsp;{props.dayOfWeek}</div>
        </div>
        <div className="forecast-content">
            <div className="location">{props.weatherData.locationName}&nbsp;&nbsp;({props.weatherData.description})</div>
            <div className="degree">
              <div className="num">{props.weatherData.realTemprature}<sup>o</sup>C</div>
              <div className="forecast-icon">
                  <img src={decideIcon(props.weatherData.description)} alt="" width="75" />
              </div>	
            </div>
            <div>
              <span>En düşük {props.weatherData.minTemprature}</span>
              <span>En yüksek {props.weatherData.maxTemprature}</span>
              <span>Hissedilen {props.weatherData.feelsTemprature}</span>
            </div>
            <div style={{marginTop: "10px"}}>
              <span>Basınç {props.weatherData.pressure}</span>
              <span>Gün doğumu {props.weatherData.sunRise}</span>
              <span>Gün batımı {props.weatherData.sunSet}</span>
            </div>
            
        </div>
    </div>
            
  );
}

export default weatherCurrent;
