import React, {Component} from 'react';

import axios from '../../../axios-orders';

class WeatherInfo extends Component {

    state = {
        weatherDataLoaded : 'false',
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

    componentDidMount () {
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        axios.get('/wm/curwet')
            .then(response => {
                this.setState({
                    weatherDataLoaded: 'true',
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
    }

    render() {

        let weatherInfo = null;
        if (this.state.weatherDataLoaded == 'true') {
            weatherInfo = (
                <p className='WeatherInfoItems'>
                <div className='WeatherInfoItem'>{this.state.weatherData.description}</div>
                <div className='WeatherInfoItem'><img src={this.state.weatherData.descriptionIcon} alt='MyBurger' /></div>
                <div className='WeatherInfoItem'>{this.state.weatherData.realTemprature}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.feelsTemprature}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.minTemprature}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.maxTemprature}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.pressure}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.humidity}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.countryCode}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.sunRise}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.sunSet}</div>
                <div className='WeatherInfoItem'>{this.state.weatherData.locationName}</div>
                </p>
            );
        }

        return (
            <div className='WeatherInfoPage'>
                {weatherInfo}
            </div>
        );
    }
}

export default WeatherInfo;