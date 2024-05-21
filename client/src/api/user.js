// api/user.js

import API from './index';

const register = (formData) => API.post('/auth/register', formData);
const signin = (formData) => API.post('/auth/login', formData);

export {
    register,
    signin
};
