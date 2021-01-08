import React from 'react';

import banner from './images/banner.png';

function WeatherFindLocation() {
  return (
    
    <div className="hero" style={{backgroundImage: `url(${banner})`}}>
      <div className="container">
        <form action="#" className="find-location">
          <input type="text" placeholder="Find your location..." />
          <input type="submit" value="Find" />
        </form>
      </div>
    </div>

  );
}

export default WeatherFindLocation;
