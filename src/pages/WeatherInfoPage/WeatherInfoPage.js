import React from 'react';

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
    error: false,
    weatherDataLoaded: false,
    weatherData: {
        id: '',
        main: '',
        description: '',
        icon: '',
        realTemperature: '',
        feelsTemperature: '',
        minTemperature: '',
        maxTemperature: '',
        pressure: '',
        humidity: '',
        countryCode: '',
        sunRise: '',
        sunSet: '',
        timeZone: '',
        locationId: '',
        locationName: '',
        longitude: '',
        latitude: '',    
        nearFuture: [],
        nextDays: []
      }
    };

    componentDidMount() {
        //this.getWeatherData(744926);    
    }

    getWeatherData = (locationId) => {
        let loopCount = 0;
        let pushedCount = 0;

        var weekDays = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    
        var d = new Date();
        var dayNumOfWeek = d.getDay();
    
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        //axios.get('/weatherme/v1/getcurrentweather/Istanbul')
        //axios.get('/weatherme/v1/getcurrentweather/745044')   // Istanbul
        //axios.get('/weatherme/v1/getcurrentweather/745042')   // İstanbul
        axios.get('/weatherme/v1/getcurrentweather/' + locationId)   // Kadıköy
            .then(response => {

                response.data['realTemperature'] = Math.round(response.data['realTemperature']);
                response.data['feelsTemperature'] = Math.round(response.data['feelsTemperature']);
                response.data['sunRise'] = response.data['sunRise'].substr(11,5);
                response.data['sunSet'] = response.data['sunSet'].substr(11,5);

                response.data['nearFuture'].forEach(function( item ) {
                    item['temp'] = Math.round(item['temp']);
                    item['dtTxt'] = item['dtTxt'].substr(11,5);
                });

                response.data['nextDays'].forEach(function( item ) {
                  item['temp'] = Math.round(item['temp']);
                  item['tempMin'] = Math.round(item['tempMin']);
                  item['tempMax'] = Math.round(item['tempMax']);
                  item['dtTxt'] = item['dtTxt'].substr(0,10);
                });

                loopCount = 0;
                pushedCount = 0;
                let weatherNearFuture = [];
                response.data['nearFuture'].forEach(function( item ) {
                    if (loopCount >= 1 & pushedCount < 6) {
                        weatherNearFuture.push(
                            {
                                id: item['id'],
                                main: item['main'],
                                description: item['description'],
                                icon: item['icon'],
                                temp: item['temp'], 
                                dtTxt: item['dtTxt'],
                            }
                        );
                        pushedCount++;
                    }
                    loopCount++;
                });

                let pushStartIndex = 0;
                if (response.data['nextDays'].length > 5) {
                  pushStartIndex = 1;
                } 
                
                loopCount = 0;
                pushedCount = 0;
                let weatherNextDays = [];
                response.data['nextDays'].forEach(function( item ) {
                  if (loopCount >= pushStartIndex & pushedCount < 5) {
                    weatherNextDays.push(
                        {
                            id: item['id'],
                            main: item['main'],
                            description: item['description'],
                            icon: item['icon'],
                            temp: item['temp'],
                            tempMin: item['tempMin'], 
                            tempMax: item['tempMax'],  
                            dtTxt: item['dtTxt'],
                            weekDay: weekDays[ (dayNumOfWeek + loopCount) % 7 ] ,
                        }
                    );
                    pushedCount++;
                  }
                  loopCount++;
                });

                this.setState({
                    error: false,
                    weatherDataLoaded: true,
                    weatherData: {
                        id: response.data['id'],
                        main: response.data['main'],
                        description: response.data['description'],
                        icon: response.data['icon'],
                        realTemperature: response.data['realTemperature'],
                        feelsTemperature: response.data['feelsTemperature'],
                        minTemperature: response.data['minTemperature'],
                        maxTemperature: response.data['maxTemperature'],
                        pressure: response.data['pressure'],
                        humidity: response.data['humidity'],
                        countryCode: response.data['countryCode'],
                        sunRise: response.data['sunRise'],
                        sunSet: response.data['sunSet'],
                        timeZone: response.data['timeZone'],
                        locationId: response.data['locationId'],
                        locationName: response.data['locationName'],
                        nearFuture: weatherNearFuture,
                        nextDays: weatherNextDays
                    }
                });
            })
            .catch(error => {
                
                var errMsg = error.message;
                if (error.response) {
                  /*
                   * The request was made and the server responded with a
                   * status code that falls out of the range of 2xx
                   */
                  console.log('RESPONSE.DATA : ', error.response.data);
                  console.log('RESPONSE.STATUS : ', error.response.status);
                  console.log('RESPONSE.HEADERS : ', error.response.headers);

                  errMsg = errMsg + '\n' + 'RESPONSE.STATUS : ' + error.response.status;
                } else if (error.request) {
                    /*
                    * The request was made but no response was received, `error.request`
                    * is an instance of XMLHttpRequest in the browser and an instance
                    * of http.ClientRequest in Node.js
                    */
                    console.log('REQUEST : ', error.request);

                    errMsg = errMsg + '\n' + 'REQUEST : ' + error.request;
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error.message : ', error.message);
                    errMsg = error.message;
                }
                alert(errMsg);

                this.setState({error: true});
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

    const weatherCurrent = this.state.weatherDataLoaded ? <WeatherCurrent weatherData={this.state.weatherData} dayOfWeek={dayOfWeek} month={month} date={date}/> : null;
    const weatherNearFuture = this.state.weatherDataLoaded ? <WeatherNearFuture weatherData={this.state.weatherData} /> : null;
    const weatherNextDays = this.state.weatherDataLoaded ? <WeatherNextDays weatherData={this.state.weatherData} /> : null;

    return (
      
        <div className="site-content">

          <WeatherHeader />

          <WeatherFindLocation getWeatherData={this.getWeatherData} />
            
          <div className="forecast-table">
            <div className="container">
              <div className="forecast-container">

                {weatherCurrent}

                {weatherNearFuture} 

              </div>
            </div>
          </div>

          <div style={{height: "150px"}}></div>

          <div className="forecast-table">
            <div className="container">
              <div className="forecast-container">

              {weatherNextDays}

              </div>
            </div>
          </div>

          <WeatherOtherContent />

        </div>
      
      );

   }
}

export default WeatherInfoPage;
