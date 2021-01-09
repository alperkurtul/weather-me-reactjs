import React, {Component} from 'react';
import './App.css';
import axios from "./axios-orders";
import WeatherInfoPage from './pages/WeatherInfoPage/WeatherInfoPage';

import icon1 from './pages/WeatherInfoPage/images/icons/icon-1.svg';
import icon2 from './pages/WeatherInfoPage/images/icons/icon-2.svg';
import icon3 from './pages/WeatherInfoPage/images/icons/icon-3.svg';
import icon4 from './pages/WeatherInfoPage/images/icons/icon-4.svg';
import icon5 from './pages/WeatherInfoPage/images/icons/icon-5.svg';
import icon6 from './pages/WeatherInfoPage/images/icons/icon-6.svg';
import icon7 from './pages/WeatherInfoPage/images/icons/icon-7.svg';
import icon8 from './pages/WeatherInfoPage/images/icons/icon-8.svg';
import icon9 from './pages/WeatherInfoPage/images/icons/icon-9.svg';
import icon10 from './pages/WeatherInfoPage/images/icons/icon-10.svg';
import icon11 from './pages/WeatherInfoPage/images/icons/icon-11.svg';
import icon12 from './pages/WeatherInfoPage/images/icons/icon-12.svg';
import icon13 from './pages/WeatherInfoPage/images/icons/icon-13.svg';
import icon14 from './pages/WeatherInfoPage/images/icons/icon-14.svg';

class App extends React.Component {

    state = {
        weatherDataLoaded: null,
        weatherJSONData: null,
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
            icon: null,
            nearFuture: []
        },
        error: null,
    };

    componentDidMount() {
        this.getData();    
    }

    decideIcon(desc) {
        let descIcon = '';

        switch (desc) {
            case ('açık'):
                descIcon = icon2;
                break;
            case ('kapalı'):
                descIcon = icon5;
                break;
            case ('parçalı bulutlu'):
                descIcon = icon6;
                break;
                case ('hafif yağmur'):
                descIcon = icon9;
                break;
            case ('orta şiddetli yağmur'):
                descIcon = icon10;
                break;
            default:
                descIcon= '';
        }
        
        return descIcon;
    }

    getData = () => {
        let descIcon = '';
        let descIconArray = [] ;

        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        //axios.get('/weatherme/v1/getcurrentweather/Istanbul')
        axios.get('/weatherme/v1/getcurrentweather/745044')
            .then(response => {

                descIcon = this.decideIcon(response.data['description']);
                descIconArray[0] = this.decideIcon(response.data['nearFuture'][0]['description']);
                descIconArray[1] = this.decideIcon(response.data['nearFuture'][1]['description']);
                descIconArray[2] = this.decideIcon(response.data['nearFuture'][2]['description']);
                descIconArray[3] = this.decideIcon(response.data['nearFuture'][3]['description']);
                descIconArray[4] = this.decideIcon(response.data['nearFuture'][4]['description']);
                descIconArray[5] = this.decideIcon(response.data['nearFuture'][5]['description']);
                descIconArray[6] = this.decideIcon(response.data['nearFuture'][6]['description']);
                descIconArray[7] = this.decideIcon(response.data['nearFuture'][7]['description']);
        
                response.data['realTemprature'] = Math.round(response.data['realTemprature']);
                response.data['feelsTemprature'] = Math.round(response.data['feelsTemprature']);
                response.data['sunRise'] = response.data['sunRise'].substr(11,5);
                response.data['sunSet'] = response.data['sunSet'].substr(11,5);

                let weatherNearFuture = [];
                let i = 0;
                response.data['nearFuture'].forEach(function( item ) {
                    item['temp'] = Math.round(item['temp']);
                    item['dtTxt'] = item['dtTxt'].substr(11,5);

                    if (i > 0 & i < 7) {
                        console.log(item['description']);
                        weatherNearFuture.push(
                            {
                                temp: item['temp'], 
                                description: item['description'], 
                                dtTxt: item['dtTxt'],
                                icon: descIconArray[i]
                            }
                            );
                    }
                    i++;
                });

                this.setState({
                    weatherDataLoaded: true,
                    weatherJSONData: response.data,
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
                        icon: descIcon,
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

        let weatherInfoPage = <WeatherInfoPage weatherData={this.state.weatherData}></WeatherInfoPage>;

        return (
            <div className="App">
                {weatherInfoPage}
            </div>
        );
    }
}

export default App;
