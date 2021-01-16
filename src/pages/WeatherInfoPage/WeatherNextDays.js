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
                    {/*<img style={{margin: "5px", borderRadius: "20%", border: "solid 0px", backgroundColor: "#007173"}} src={decideIcon(nd)} alt="" width="60" />*/}
                    <img className="forecast-img-nd" src={decideIcon(nd)} alt="" />
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
