// api/index.js

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/v1/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

const register = (formData) => API.post('/auth/register', formData);

export {
    register
};
