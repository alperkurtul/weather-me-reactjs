import React, {Component} from 'react';
import './App.css';
import axios from "./axios-orders";
import WeatherInfoPage from './pages/WeatherInfoPage/WeatherInfoPage';

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
    };

    componentDidMount() {
        this.getData();    
    }

    getData = () => {
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        //axios.get('/weatherme/v1/getcurrentweather/Istanbul')
        axios.get('/weatherme/v1/getcurrentweather/745044')
            .then(response => {

                response.data['realTemprature'] = Math.round(response.data['realTemprature']);
                response.data['feelsTemprature'] = Math.round(response.data['feelsTemprature']);
                response.data['sunRise'] = response.data['sunRise'].substr(11,5);
                response.data['sunSet'] = response.data['sunSet'].substr(11,5);

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
