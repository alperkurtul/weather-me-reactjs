import React from 'react';

import decideIcon from './DecideIcon';

const weatherNextDays = (props) => {

    const nextDaysObjs = props.weatherData.nextDays;
    let i = 0;

    let nextDays = nextDaysObjs.map(nd => {         
        i++;
        return(
            <div className={["forecast", "forecast2"].join(" ")}>
                <div className="forecast-header">
                    <div className="day">{props.daysArray[ (props.dayNumOfWeek+i) % 7 ]}</div>
                </div> 
                <div className="forecast-content">
                    <div className="forecast-icon">
                    <img src={decideIcon(nd.description)} alt="" width="35" />
                    </div>
                    <div className="degree">{nd.temp}<sup>o</sup>C</div>
                    {/* <small>{nd.description}</small> */}
                </div>
            </div>
        
        );
    });

  return (
    <>
        {nextDays}
    </> 
  );
}

export default weatherNextDays;
