// src/reducers/authReducer.js

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../constants/actionTypes';

const initialState = {
    data: JSON.parse(localStorage.getItem('profile')) || null,
    token: localStorage.getItem('token') || null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case SIGN_UP_SUCCESS:
            localStorage.setItem('profile', JSON.stringify(action.payload.user));
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                data: action.payload.user,
                token: action.payload.token,
                error: null,
            };
        case SIGN_UP_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state,
                data: null,
                token: null,
                error: action.payload,
            };
        case LOGOUT:
            localStorage.removeItem('profile');
            localStorage.removeItem('token');
            return { ...state, data: null, token: null, error: null };
        default:
            return state;
    }
};

export default authReducer;
