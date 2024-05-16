// actions/auth.js

import * as api from '../api';

// Action Types
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// Action Creators
export const signUp = (formData) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);

        dispatch({ type: SIGN_UP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SIGN_UP_FAILURE, payload: error.response.data.message });
    }
};