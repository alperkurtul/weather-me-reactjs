import React from 'react';

import logo from './images/logo.png';

const weatherHeader = () => {
  return (
      
    <div className="site-header">
        <div className="container">
          <a href="index.html" className="branding">
              <img src={logo} alt="" className="logo" />
              <div className="logo-type">
              <h1 className="site-title">WeatherME</h1>
              <small className="site-description">developed by Alper Kurtul</small>
              </div>
          </a>

          {/*
          <div className="main-navigation">
              <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
              <ul className="menu">
                  <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
              </ul> 
          </div>

          <div className="mobile-navigation"></div>
          */}
        </div>
    </div>
    
  );
}

export default weatherHeader;
