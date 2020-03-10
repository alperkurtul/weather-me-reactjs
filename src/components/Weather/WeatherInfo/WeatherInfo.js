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
                <div className='WIItems WIItem'>
                    <div>
                        <div><img src={this.state.weatherData.descriptionIcon} alt='WeatherIcon' height={'50px'} /></div>
                        <div>{this.state.weatherData.description}</div>
                    </div>
                    <div>
                        <div>Anlık</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.realTemprature}</div>
                    </div>
                    <div>
                        <div>Hissedilen</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.feelsTemprature}</div>
                    </div>
                    <div>
                        <div>En düşük</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.minTemprature}</div>
                    </div>
                    <div>
                        <div>En yüksek</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.maxTemprature}</div>
                    </div>
                    <div>
                        <div>Basınç</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.pressure}</div>
                    </div>
                    <div>
                        <div>Nem</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.humidity}</div>
                    </div>
                    <div>
                        <div>Gün doğumu</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.sunRise}</div>
                    </div>
                    <div>
                        <div>Gün batımı</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.sunSet}</div>
                    </div>
                    <div>
                        <div>Yer</div>
                        <div className='WIFeelTemp'>{this.state.weatherData.locationName}</div>
                    </div>
                </div>
            );
        }

        return (
            <div className='WIPage'>
                {weatherInfo}
            </div>
        );
    }
}

export default WeatherInfo;