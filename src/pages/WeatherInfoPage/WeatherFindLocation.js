import React from 'react';

import banner from './images/banner.png';

const weatherFindLocation = () => {
  return (
    
    <div className="hero" style={{backgroundImage: `url(${banner})`}}>
      <div className="container" style={{display: "none"}}>
        <form action="#" className="find-location">
          <input type="text" placeholder="Şehir arayın..." />
          <input type="submit" value="Ara" />
        </form>
      </div>
    </div>

  );
}

export default weatherFindLocation;
