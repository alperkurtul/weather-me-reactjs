import React from 'react';

const weatherInfo  = (props) => {

        let wiitems1 = 'WIItems1';
        let wiitems2 = 'WIItems2';

        let wiitems = '';
        /*if (props.viewMode)
            wiitems = wiitems1;
        else*/
            wiitems = wiitems2;

        let style1 = {color: 'red',
                        backgroundColor: 'blue'};

        let weatherInfo = null;
        if (props.weatherDataLoaded) {
            weatherInfo = (
                <div>
                <div className={[wiitems , 'WIItem'].join(' ')}>
                    <div>
                        <div><img className='WImage' src={props.weatherData.descriptionIcon} alt='WeatherIcon' /></div>
                    </div>
                    <div style={{...style1}}>
                        <div>{props.weatherData.locationName}</div>
                        <div>{props.weatherData.description}</div>
                        <div>{props.weatherData.realTemprature}</div>
                        <div>{props.weatherData.humidity}</div>
                    </div>

                    <div>
                    <div>
                        <div>Hissedilen</div>
                        <div>{props.weatherData.feelsTemprature}</div>
                    </div>
                    <div>
                        <div>En düşük</div>
                        <div>{props.weatherData.minTemprature}</div>
                    </div>
                    <div>
                        <div>En yüksek</div>
                        <div>{props.weatherData.maxTemprature}</div>
                    </div>
                    </div>


                    <div>
                    <div>
                        <div>Basınç</div>
                        <div>{props.weatherData.pressure}</div>
                    </div>
                    <div>
                        <div>Gün doğumu</div>
                        <div>{props.weatherData.sunRise}</div>
                    </div>
                    <div>
                        <div>Gün batımı</div>
                        <div>{props.weatherData.sunSet}</div>
                    </div>
                    </div>

                </div>
                <div className={[wiitems , 'WIItem'].join(' ')}>&nbsp;</div>
                </div>
            );
        }

        return (
            <div>
                {weatherInfo}
            </div>
        );

}

export default weatherInfo;