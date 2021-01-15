import React from 'react';

const weatherInfoOld  = (props) => {

        let weatherInfo = null;
        if (props.weatherDataLoaded) {
            weatherInfo = (
                <div className={'WIPageFont'}>
                <div className={'WI100'}>
                    <div className={'WI200'}>
                        <div><img className='WImage' src={props.weatherData.descriptionIcon} alt='WeatherIcon' /></div>
                    </div>

                    <div className={'WI300'}>
                        <div>
                        <div className={'WILabel02'}>{props.weatherData.locationName}</div>
                        <div class={"WIWeatherSituation"}>{props.weatherData.description}</div>
                        </div>
                        <div><span className={'WILabel01'}>Sıcaklık&nbsp;:</span>&nbsp;{props.weatherData.realTemperature}&#176;C</div>
                        <div><span className={'WILabel01'}>Nem Oranı&nbsp;:</span>&nbsp;%{props.weatherData.humidity}</div>
                    </div>

                    <div className={'WI301'}>
                        <div className={'WI400'}>
                            <div className={'WI500 WI500margin01'}>
                                <div className={'WILabel01'}>Hissedilen</div>
                                <div>{props.weatherData.feelsTemperature}</div>
                            </div>
                            <div className={'WI500 WI500margin01'}>
                                <div className={'WILabel01'}>En düşük</div>
                                <div>{props.weatherData.minTemperature}</div>
                            </div>
                            <div className={'WI500 WI500margin02'}>
                                <div className={'WILabel01'}>En yüksek</div>
                                <div>{props.weatherData.maxTemperature}</div>
                            </div>
                        </div>


                        <div className={'WI400'}>
                            <div className={'WI500 WI500margin03'}>
                                <div className={'WILabel01'}>Basınç</div>
                                <div>{props.weatherData.pressure}</div>
                            </div>
                            <div className={'WI500 WI500margin03'}>
                                <div className={'WILabel01'}>Gün doğumu</div>
                                <div>{props.weatherData.sunRise}</div>
                            </div>
                            <div className={'WI500'}>
                                <div className={'WILabel01'}>Gün batımı</div>
                                <div>{props.weatherData.sunSet}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'WI100'}>&nbsp;</div>
                </div>
            );
        }

        return (
            <div>
                {weatherInfo}
            </div>
        );

}

export default weatherInfoOld;