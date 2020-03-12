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
                {/*<div className={[wiitems , 'WIItem'].join(' ')}>*/}
                {/*<div className={'WIItems2 WIItem'}>*/}
                <div className={'WI100'}>
                    <div className={'WI200'}>
                        <div><img className='WImage' src={props.weatherData.descriptionIcon} alt='WeatherIcon' /></div>
                    </div>

                    {/*<div style={{...style1}}>*/}
                    <div className={'WI300'}>
                        <div className={'WILabel02'}>{props.weatherData.locationName}</div>
                        <div>{props.weatherData.description}</div>
                        <div><span className={'WILabel01'}>Sıcaklık&nbsp;:</span>&nbsp;{props.weatherData.realTemprature}&#176;C</div>
                        <div><span className={'WILabel01'}>Nem Oranı&nbsp;:</span>&nbsp;%{props.weatherData.humidity}</div>
                    </div>

                    <div className={'WI301'}>
                        <div className={'WI400'}>
                            <div className={'WI500 WI500margin01'}>
                                <div className={'WILabel01'}>Hissedilen</div>
                                <div>{props.weatherData.feelsTemprature}</div>
                            </div>
                            <div className={'WI500 WI500margin01'}>
                                <div className={'WILabel01'}>En düşük</div>
                                <div>{props.weatherData.minTemprature}</div>
                            </div>
                            <div className={'WI500 WI500margin02'}>
                                <div className={'WILabel01'}>En yüksek</div>
                                <div>{props.weatherData.maxTemprature}</div>
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
                {/*<div className={[wiitems , 'WIItem'].join(' ')}>&nbsp;</div>*/}
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

export default weatherInfo;