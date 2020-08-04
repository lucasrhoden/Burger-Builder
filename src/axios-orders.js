import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguer-app-82634.firebaseio.com/'
});

export default instance;