import axios from 'axios';

const instance = axios.create({
    baseURL: "https://red-flags1.herokuapp.com/"
});

export default instance;