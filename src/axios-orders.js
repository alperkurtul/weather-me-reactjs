import axios from 'axios';

const instance = axios.create({
    //baseURL: `${process.env.REACT_APP_FB_ROOT_API_URL}`
    baseURL: 'http://localhost:8080'
});

export default instance;