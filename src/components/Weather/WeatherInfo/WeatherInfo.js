import React from 'react';

const weatherInfo  = (props) => {

        let weatherInfo = null;
        if (props.weatherDataLoaded) {
            weatherInfo = (
                <div className='WIItems WIItem'>
                    <div>
                        <div><img src={props.weatherData.descriptionIcon} alt='WeatherIcon' height={'50px'} /></div>
                        <div>{props.weatherData.description}</div>
                    </div>
                    <div>
                        <div>Anlık</div>
                        <div className='WIFeelTemp'>{props.weatherData.realTemprature}</div>
                    </div>
                    <div>
                        <div>Hissedilen</div>
                        <div className='WIFeelTemp'>{props.weatherData.feelsTemprature}</div>
                    </div>
                    <div>
                        <div>En düşük</div>
                        <div className='WIFeelTemp'>{props.weatherData.minTemprature}</div>
                    </div>
                    <div>
                        <div>En yüksek</div>
                        <div className='WIFeelTemp'>{props.weatherData.maxTemprature}</div>
                    </div>
                    <div>
                        <div>Basınç</div>
                        <div className='WIFeelTemp'>{props.weatherData.pressure}</div>
                    </div>
                    <div>
                        <div>Nem</div>
                        <div className='WIFeelTemp'>{props.weatherData.humidity}</div>
                    </div>
                    <div>
                        <div>Gün doğumu</div>
                        <div className='WIFeelTemp'>{props.weatherData.sunRise}</div>
                    </div>
                    <div>
                        <div>Gün batımı</div>
                        <div className='WIFeelTemp'>{props.weatherData.sunSet}</div>
                    </div>
                    <div>
                        <div>Yer</div>
                        <div className='WIFeelTemp'>{props.weatherData.locationName}</div>
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

export default weatherInfo;