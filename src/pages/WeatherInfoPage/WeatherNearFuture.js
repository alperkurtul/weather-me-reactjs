import React from 'react';

import decideIcon from './DecideIcon';

const weatherNearFuture = (props) => {

    const nearFutureObjs = props.weatherData.nearFuture;

    let nearFutures = nearFutureObjs.map(nf => {         
        return(
            <div className="forecast">
                <div className="forecast-header">
                    <div className="day">{nf.dtTxt}</div>
                </div> 
                <div className="forecast-content">
                    <div className="forecast-icon">
                    <img src={decideIcon(nf.description)} alt="" width="35" />
                    </div>
                    <div className="degree">{nf.temp}<sup>o</sup>C</div>
                    <small>{nf.description}</small> 
                </div>
            </div>
        );
    });

  return (
    <>
        {nearFutures}
    </> 
  );
}

export default weatherNearFuture;
