/*import icon1 from '../../pages/WeatherInfoPage/images/icons/icon-1.svg';
import icon2 from '../../pages/WeatherInfoPage/images/icons/icon-2.svg';
import icon3 from '../../pages/WeatherInfoPage/images/icons/icon-3.svg';
import icon4 from '../../pages/WeatherInfoPage/images/icons/icon-4.svg';
import icon5 from '../../pages/WeatherInfoPage/images/icons/icon-5.svg';
import icon6 from '../../pages/WeatherInfoPage/images/icons/icon-6.svg';
import icon7 from '../../pages/WeatherInfoPage/images/icons/icon-7.svg';
import icon8 from '../../pages/WeatherInfoPage/images/icons/icon-8.svg';
import icon9 from '../../pages/WeatherInfoPage/images/icons/icon-9.svg';
import icon10 from '../../pages/WeatherInfoPage/images/icons/icon-10.svg';
import icon11 from '../../pages/WeatherInfoPage/images/icons/icon-11.svg';
import icon12 from '../../pages/WeatherInfoPage/images/icons/icon-12.svg';
import icon13 from '../../pages/WeatherInfoPage/images/icons/icon-13.svg';
import icon14 from '../../pages/WeatherInfoPage/images/icons/icon-14.svg';*/

const decideIcon = (data) => {  

        let descIcon = '';

        descIcon = data.icon;

        /* switch (data.description) {
            case ('az bulutlu'):
                descIcon = icon1;
                break;
            case ('açık'):
                descIcon = icon2;
                break;
            case ('parçalı az bulutlu'):
                descIcon = icon3;
                break;
            case ('kapalı'):
                descIcon = icon5;
                break;
            case ('parçalı bulutlu'):
                descIcon = icon6;
                break;
            case ('hafif yağmur'):
                descIcon = icon9;
                break;
            case ('orta şiddetli yağmur'):
                descIcon = icon10;
                break;
            case ('şiddetli yağmur'):
                descIcon = icon11;
                break;
            case ('hafif kar yağışlı'):
                descIcon = icon13;
                break;
            case ('light rain and snow'):
                descIcon = icon13;
                break;
                case ('kar yağışlı'):
                descIcon = icon14;
                break;
            default:
                descIcon= '';
        } */
        
        return descIcon;

}

export default decideIcon;
