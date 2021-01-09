import React from 'react';

import './style.css';
import './fonts/font-awesome.min.css';
import WeatherFindLocation from './WeatherFindLocation';
import WeatherCurrent from './WeatherCurrent';
import WeatherNextDays from './WeatherNextDays';
import WeatherOtherContent from './WeatherOtherContent';
import WeatherHeader from './WeatherHeader';
import WeatherNearFuture from './WeatherNearFuture';

function WeatherInfoPage(props) {

  //var weekDays = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
  var weekDays = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
  var months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

  var d = new Date();
  var dayNumOfWeek = d.getDay();
  var dayOfWeek = weekDays[ dayNumOfWeek ];
  var month = months[ d.getMonth() ];
  var date = d.getDate();

  return (
    
      <div className="site-content">

        <WeatherHeader />

        <WeatherFindLocation />
          
        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">

              <WeatherCurrent weatherData={props.weatherData} dayOfWeek={dayOfWeek} month={month} date={date}/>

              {/* <WeatherNextDays daysArray={weekDays} dayNumOfWeek={dayNumOfWeek} /> */}
              <WeatherNearFuture weatherData={props.weatherData} daysArray={weekDays} dayNumOfWeek={dayNumOfWeek} />
             
            </div>
          </div>
        </div>

        <WeatherOtherContent />

      </div>
    
  );
}

export default WeatherInfoPage;
