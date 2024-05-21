// src/reducers/authReducer.js

import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../constants/actionTypes';

const initialState = {
    data: JSON.parse(localStorage.getItem('profile')) || null,
    token: localStorage.getItem('token') || null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
        case LOGIN_SUCCESS:
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
            localStorage.clear();
            return { ...state, data: null, token: null, error: null };
        default:
            return state;
    }
};

export default authReducer;
