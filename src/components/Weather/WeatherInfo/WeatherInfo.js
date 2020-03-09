import React, {Component} from 'react';

import axios from '../../../axios-orders';

class WeatherInfo extends Component {

    state = {
        weatherDataLoaded : null,
        weatherData : null,
        error : null
    };

    componentDidMount () {
        //axios.get(`${process.env.REACT_APP_FB_INGREDIENTS_SUFFIX}`)
        axios.get('/wm/curwet')
            .then(response => {
                this.setState({weatherData: response.data, weatherDataLoaded: 'true'});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {
        return (
            <div>{this.state.weatherDataLoaded}</div>
        );
    }
}

export default WeatherInfo;