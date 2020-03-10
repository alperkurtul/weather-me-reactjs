import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/UI/Button/Button.css';
import './components/Weather/WeatherInfo/WeatherInfo.css';

import Button from './components/UI/Button/Button';
import WeatherInfo from "./components/Weather/WeatherInfo/WeatherInfo";
import axios from "./axios-orders";

class App extends React.Component {

    state = {
        getData : null,
        weatherDataLoaded : null,
        weatherJSONData : null,
        weatherData : {
            description : '',
            descriptionIcon : '',
            realTemprature : '',
            feelsTemprature : '',
            minTemprature : '',
            maxTemprature : '',
            pressure : '',
            humidity : '',
            countryCode : '',
            sunRise : '',
            sunSet : '',
            timeZone : '',
            locationId : '',
            locationName : ''
        },
        error : null
    };


    getData = () => {
        //this.setState({getData: true});
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        axios.get('/wm/curwet')
            .then(response => {
                this.setState({
                    weatherDataLoaded: true,
                    weatherJSONData: response.data,
                    weatherData: {
                        description: response.data['description'],
                        descriptionIcon : response.data['descriptionIcon'],
                        realTemprature : response.data['realTemprature'],
                        feelsTemprature : response.data['feelsTemprature'],
                        minTemprature : response.data['minTemprature'],
                        maxTemprature : response.data['maxTemprature'],
                        pressure : response.data['pressure'],
                        humidity : response.data['humidity'],
                        countryCode : response.data['countryCode'],
                        sunRise : response.data['sunRise'],
                        sunSet : response.data['sunSet'],
                        timeZone : response.data['timeZone'],
                        locationId : response.data['locationId'],
                        locationName : response.data['locationName']
                    }
                });
            })
            .catch(error => {
                this.setState({error: true});
            });
    };

    clearData = () => {
        this.setState({weatherDataLoaded: false});
    };

    render() {

        let weather = this.state.weatherDataLoaded ? <WeatherInfo weatherData={this.state.weatherData}></WeatherInfo> : '';

        return (
            <div className="App">
                <div><Button clicked={this.getData}>İSTANBUL Hava Durumu</Button></div>
                <div><Button clicked={this.clearData}>Temizle</Button></div>
                {weather}
            </div>
        );
    }
}

export default App;
