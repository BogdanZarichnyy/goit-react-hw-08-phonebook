import axios from 'axios';

const rerquest = axios.create({ baseURL: 'https://connections-api.herokuapp.com' });

const setToken = {
    add(token) {
        rerquest.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    remove() {
        rerquest.defaults.headers.common.Authorization = '';
    }
}

export { rerquest, setToken };