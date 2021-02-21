import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_WEATHER_ME_SPRING_BOOT_API_URL}`
});

export default instance;