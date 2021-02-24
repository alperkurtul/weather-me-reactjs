import React from 'react';
import axios from "../../axios-weather";
import FindLocationScrollList from './FindLocationScrollList';

import banner from './images/banner-02.png';

class WeatherFindLocation extends React.Component {

  state = {
    searchedKeyword: '',
    selectedLocationName: '',
    displayedLocationName: '',
    locationList: null,
    locationListItemCount: 0
  }

  componentDidMount() {
    let locationId = sessionStorage.getItem('locationId')
    let selectedLocationName = sessionStorage.getItem('selectedLocationName')
    let displayedLocationName = sessionStorage.getItem('displayedLocationName')

    this.setState({
      selectedLocationName: selectedLocationName,
      displayedLocationName: displayedLocationName,
      }    
    )

    if (locationId != null & locationId != '') this.props.getWeatherData(locationId)

  }

  locationChoiceHasBeenMade = (locationId) => {

    let selectedLocationName = ''
    let displayedLocationName = ''
    this.state.locationList.forEach(function( item ) {
      if (item['locationId'] == locationId) {
        selectedLocationName = item['locationName']
        displayedLocationName = item['locationName'] + ', ' + item['country']
        return;
      }
    });

    sessionStorage.setItem('locationId', locationId)
    sessionStorage.setItem('selectedLocationName', selectedLocationName)
    sessionStorage.setItem('displayedLocationName', displayedLocationName)

    this.setState({
        searchedKeyword: '',
        selectedLocationName: selectedLocationName,
        displayedLocationName: displayedLocationName,
        locationList: null,
        locationListItemCount: 0
      }    
    )

    this.props.getWeatherData(locationId)

  }

  typingLocation = (event) => {

    this.setState({
        searchedKeyword: event.target.value,
        displayedLocationName: event.target.value,
        locationList: null,
        locationListItemCount: 0
      }
    )

    if (event.target.value.length > 0) this.searchForLocation(event.target.value);

  }

  searchForLocation = (locationName) => {

    axios.get('/weatherme/v1/getlocationlist', {
      params: {
        locationname: locationName
      }
    })   
    .then(response => {

      if (response.data['searchedKeyword'] == this.state.searchedKeyword) {
        
        if (response.data['locationRespList'].length > 0 & this.state.searchedKeyword.length > 0 /*& response.data['locationRespList'].length < 550*/) {
          this.setState({
            locationList: response.data['locationRespList'],
            locationListItemCount: response.data['locationRespList'].length
          });
        } else {
          this.setState({
            locationList: null,
            locationListItemCount: 0
          });
        }
      }

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

    const findLocationScrollList = this.state.locationList == null ? null : <FindLocationScrollList locationChoiceHasBeenMade={this.locationChoiceHasBeenMade} locationList={this.state.locationList} /> ;

    return (
      
      <div className="hero" style={{backgroundImage: `url(${banner})`}}>
        <div className="container">
          <div className="find-location">
            <input value={this.state.displayedLocationName} autoComplete="off" name="locationName" type="text" placeholder="Şehir arayın..." onChange={this.typingLocation} />
            {/*<input type="submit" value="Ara" />*/}
          </div>

                {findLocationScrollList}

        </div>
      </div>

    );

  }

}

export default WeatherFindLocation;
