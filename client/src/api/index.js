// api/index.js

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/v1/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    console.log("first", req)
    return req;
});

export default API;
