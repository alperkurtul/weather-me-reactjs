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
                    <div className="day">{nd.weekDay}</div>
                </div> 
                <div className="forecast-content">
                    <div className="forecast-icon">
                    <img className="forecast-img-nd" src={decideIcon(nd)} alt={nd.description} title={nd.dtTxt} />
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
