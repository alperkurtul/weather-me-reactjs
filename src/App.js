import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/UI/Button/Button';
import WeatherInfo from "./components/Weather/WeatherInfo/WeatherInfo";

class App extends React.Component {

    state = {
        getData : null,
        weatherDataLoaded : 'ZZZZZ'
    }

    getData = () => {
        this.setState({getData: true});
    }

    clearData = () => {
        this.setState({getData: false});
    }

    render() {

        let weather = this.state.getData ? <WeatherInfo weatherData={this.state.weatherDataLoaded}></WeatherInfo> : '';

        return (
            <div className="App">
            {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            </header>*/}
                <div><Button clicked={this.getData}>İSTANBUL Hava Durumu</Button></div>
                <div><Button clicked={this.clearData}>Temizle</Button></div>
                {weather}
            </div>
        );
    }
}

export default App;
