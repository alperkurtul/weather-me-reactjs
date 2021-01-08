import React from 'react';

import iconUmberella from './images/icon-umberella.png';
import iconWind from './images/icon-wind.png';
import iconCompass from './images/icon-compass.png';
import icon1 from './images/icons/icon-1.svg';
import icon2 from './images/icons/icon-2.svg';
import icon3 from './images/icons/icon-3.svg';
import icon4 from './images/icons/icon-4.svg';
import icon5 from './images/icons/icon-5.svg';
import icon6 from './images/icons/icon-8.svg';
import icon7 from './images/icons/icon-7.svg';
import icon8 from './images/icons/icon-8.svg';
import icon9 from './images/icons/icon-9.svg';
import icon10 from './images/icons/icon-10.svg';
import icon11 from './images/icons/icon-11.svg';
import icon12 from './images/icons/icon-12.svg';
import icon13 from './images/icons/icon-13.svg';
import icon14 from './images/icons/icon-14.svg';

function WeatherToday(props) {

  let descIcon = '';
  switch (props.weatherData.description) {
    case ('açık'):
        descIcon = icon2;
        break;
    /*case (''):
        descIcon = iconXX;
        break;
    case (''):
        descIcon = iconXX;
        break;*/
    default:
      descIcon= '';
  }

  return (
          
    <div className="today forecast">
        <div className="forecast-header">
            <div className="day">{props.dayOfWeek}</div>
            <div className="date">{props.date}&nbsp;{props.month}</div>
        </div>
        <div className="forecast-content">
            <div className="location">{props.weatherData.locationName}&nbsp;&nbsp;({props.weatherData.description})</div>
            <div className="degree">
            <div className="num">{props.weatherData.realTemprature}<sup>o</sup>C</div>
            <div className="forecast-icon">
                <img src={descIcon} alt="" width="90" />
            </div>	
            </div>
            <span><img src={iconUmberella} alt="" />20%</span>
            <span><img src={iconWind} alt="" />18km/h</span>
            <span><img src={iconCompass} alt="" />East</span>
        </div>
    </div>
            
  );
}

export default WeatherToday;
