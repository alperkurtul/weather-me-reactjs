import React, {Component} from 'react';

import axios from "../../axios-weather";

import './style.css';
import './fonts/font-awesome.min.css';
import WeatherFindLocation from './WeatherFindLocation';
import WeatherCurrent from './WeatherCurrent';
import WeatherNextDays from './WeatherNextDays';
import WeatherOtherContent from './WeatherOtherContent';
import WeatherHeader from './WeatherHeader';
import WeatherNearFuture from './WeatherNearFuture';

class WeatherInfoPage extends React.Component {
//function WeatherInfoPage(props) {
//const weatherInfoPage = (props) => {  

  state = {
    weatherDataLoaded: false,
    weatherData: {
        description: '',
        descriptionIcon: '',
        realTemprature: '',
        feelsTemprature: '',
        minTemprature: '',
        maxTemprature: '',
        pressure: '',
        humidity: '',
        countryCode: '',
        sunRise: '',
        sunSet: '',
        timeZone: '',
        locationId: '',
        locationName: '',
        nearFuture: []
      }, 
      error: false
    };

    componentDidMount() {
        this.getData();    
    }

    getData = () => {
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        //axios.get('/weatherme/v1/getcurrentweather/Istanbul')
        //axios.get('/weatherme/v1/getcurrentweather/745044')   // Istanbul
        //axios.get('/weatherme/v1/getcurrentweather/745042')   // İstanbul
        axios.get('/weatherme/v1/getcurrentweather/744926')   // Kadıköy
            .then(response => {

                response.data['realTemprature'] = Math.round(response.data['realTemprature']);
                response.data['feelsTemprature'] = Math.round(response.data['feelsTemprature']);
                response.data['sunRise'] = response.data['sunRise'].substr(11,5);
                response.data['sunSet'] = response.data['sunSet'].substr(11,5);

                response.data['nearFuture'].forEach(function( item ) {
                    item['temp'] = Math.round(item['temp']);
                    item['dtTxt'] = item['dtTxt'].substr(11,5);
                });

                let weatherNearFuture = [];
                let i = 0;
                response.data['nearFuture'].forEach(function( item ) {
                    if (i > 0 & i < 7) {
                        weatherNearFuture.push(
                            {
                                temp: item['temp'], 
                                description: item['description'], 
                                dtTxt: item['dtTxt'],
                            }
                            );
                    }
                    i++;
                });

                this.setState({
                    weatherDataLoaded: true,
                    weatherData: {
                        description: response.data['description'],
                        descriptionIcon: response.data['descriptionIcon'],
                        realTemprature: response.data['realTemprature'],
                        feelsTemprature: response.data['feelsTemprature'],
                        minTemprature: response.data['minTemprature'],
                        maxTemprature: response.data['maxTemprature'],
                        pressure: response.data['pressure'],
                        humidity: response.data['humidity'],
                        countryCode: response.data['countryCode'],
                        sunRise: response.data['sunRise'],
                        sunSet: response.data['sunSet'],
                        timeZone: response.data['timeZone'],
                        locationId: response.data['locationId'],
                        locationName: response.data['locationName'],
                        nearFuture: weatherNearFuture
                    }
                });
            })
            .catch(error => {
                this.setState({error: true});
                console.error(error.response);
                alert(error.response.data.message);
                alert(error.response.data.details);
            });
    };

  render() {

    //var weekDays = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
    var weekDays = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    var months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

    var d = new Date();
    var dayNumOfWeek = d.getDay();
    var dayOfWeek = weekDays[ dayNumOfWeek ];
    var month = months[ d.getMonth() ];
    var date = d.getDate();

    const weatherNearFuture = this.state.weatherDataLoaded ? <WeatherNearFuture weatherData={this.state.weatherData} daysArray={weekDays} dayNumOfWeek={dayNumOfWeek} /> : '';
    const weatherCurrent = this.state.weatherDataLoaded ? <WeatherCurrent weatherData={this.state.weatherData} dayOfWeek={dayOfWeek} month={month} date={date}/> : '';

    return (
      
        <div className="site-content">

          <WeatherHeader />

          <WeatherFindLocation />
            
          <div className="forecast-table">
            <div className="container">
              <div className="forecast-container">

                {weatherCurrent}

                {/* <WeatherNextDays daysArray={weekDays} dayNumOfWeek={dayNumOfWeek} /> */}
                {weatherNearFuture} 

              </div>
            </div>
          </div>

          <WeatherOtherContent />

        </div>
      
      );

   }
}

export default WeatherInfoPage;
