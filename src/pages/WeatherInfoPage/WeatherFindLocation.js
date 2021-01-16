import React from 'react';
import axios from "../../axios-weather";

import banner from './images/banner.png';

class WeatherFindLocation extends React.Component {

  state = {
    locationName: '',
  }

  componentDidMount() {
    console.log('WeatherFindLocation componentDidMount');
  }

  retrieveLocationName = (event) => {

    console.log('value: ' + event.target.value);

    this.setState({
        locationName: event.target.value
      }
    )
  }

  getLocation = () => {

    let locationId = '';
    let locName = this.state.locationName;

    axios.get('/weatherme/v1/getlocationlist', {
      params: {
        locationname: locName
      }
    })   
    .then(response => {
      console.log('response : ' + response.data)

      response.data.forEach(function( item ) {
        if (item['locationName'] == locName) {
          locationId = item['locationId'];
        }
      });

      console.log('locationId : ' + locationId);
      this.props.getWeatherData(locationId);

    })
    .catch(error => {
        
        var errMsg = error.message;
        if (error.response) {
          console.log('RESPONSE.DATA : ', error.response.data);
          console.log('RESPONSE.STATUS : ', error.response.status);
          console.log('RESPONSE.HEADERS : ', error.response.headers);

          errMsg = errMsg + '\n' + 'RESPONSE.STATUS : ' + error.response.status;
        } else if (error.request) {
            console.log('REQUEST : ', error.request);

            errMsg = errMsg + '\n' + 'REQUEST : ' + error.request;
        } else {
            console.log('Error.message : ', error.message);
            errMsg = error.message;
        }
        alert(errMsg);

    }); 

  }

  render() {

    console.log('WeatherFindLocation render()');
    return (
      
      <div className="hero" style={{backgroundImage: `url(${banner})`}}>
        <div className="container">
          <div className="find-location">
            <input name="locationName" type="text" placeholder="Şehir arayın..." onChange={this.retrieveLocationName} />
            <input type="submit" value="Ara" onClick={this.getLocation} />
          </div>
        </div>
      </div>

    );

  }

}

export default WeatherFindLocation;
