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
        error : null,
        viewMode : false
    };


    getData = () => {
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        //axios.get('/weatherme/v1/getcurrentweather/Istanbul')
        axios.get('/weatherme/v1/getcurrentweather/745044')
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
                console.error(error.response);
                alert(error.response.data.message);
                alert(error.response.data.details);
            });
    };

    clearData = () => {
        this.setState({weatherDataLoaded: false});
    };

    changeView = () => {
        if (this.state.viewMode)
            this.setState({viewMode: false});
        else
            this.setState({viewMode: true});
    };

    render() {

        let weather = this.state.weatherDataLoaded ? <WeatherInfo viewMode={this.state.viewMode}  weatherDataLoaded={this.state.weatherDataLoaded} weatherData={this.state.weatherData}></WeatherInfo> : '';

        return (
            <div className="App">
                <div><Button clicked={this.getData}>İSTANBUL Hava Durumu</Button></div>
                <div><Button clicked={this.clearData}>Temizle</Button></div>
                <div><Button clicked={this.changeView}>Değiştir</Button></div>
                {weather}
            </div>
        );
    }
}

export default App;
