// api/index.js

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/v1/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
    }
    return req;
});

export default API;
