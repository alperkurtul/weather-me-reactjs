import React from 'react';

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

function WeatherNextDays(props) {

  return (
    
    <>
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{props.daysArray[ (props.dayNumOfWeek+1) % 7 ]}</div>
            </div> 
            <div className="forecast-content" style={{display: "none"}}>
                <div className="forecast-icon">
                <img src={icon2} alt="" width="48" />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{props.daysArray[ (props.dayNumOfWeek+2) % 7 ]}</div>
            </div> 
            <div className="forecast-content" style={{display: "none"}}>
                <div className="forecast-icon">
                <img src={icon3} alt="" width="48" />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{props.daysArray[ (props.dayNumOfWeek+3) % 7 ]}</div>
            </div> 
            <div className="forecast-content" style={{display: "none"}}>
                <div className="forecast-icon">
                <img src={icon4} alt="" width="48" />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{props.daysArray[ (props.dayNumOfWeek+4) % 7 ]}</div>
            </div> 
            <div className="forecast-content" style={{display: "none"}}>
                <div className="forecast-icon">
                <img src={icon5} alt="" width="48" />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{props.daysArray[ (props.dayNumOfWeek+5) % 7 ]}</div>
            </div> 
            <div className="forecast-content" style={{display: "none"}}>
                <div className="forecast-icon">
                <img src={icon6} alt="" width="48" />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
        <div className="forecast">
            <div className="forecast-header">
                <div className="day">{props.daysArray[ (props.dayNumOfWeek+6) % 7 ]}</div>
            </div> 
            <div className="forecast-content" style={{display: "none"}}>
                <div className="forecast-icon">
                <img src={icon7} alt="" width="48" />
                </div>
                <div className="degree">23<sup>o</sup>C</div>
                <small>18<sup>o</sup></small>
            </div>
        </div>
    </> 
    
  );
}

export default WeatherNextDays;
