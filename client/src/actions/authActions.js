// actions/auth.js

import { register, signin } from '../api/user'
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../constants/actionTypes';


// Action Creators
export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { usernameOrEmail, password } = formData;
        const response = await signin({ usernameOrEmail, password });

        if (response.success) {
            // If login is successful, dispatch LOGIN_SUCCESS action
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
            navigate('/dashboard');
            return { success: true };
        } else {
            // If login fails, dispatch LOGIN_FAILURE action
            dispatch({ type: LOGIN_FAILURE, payload: response.error });
            return { success: false, error: response.error };
        }
    } catch (error) {
        // If an error occurs during the login process, dispatch LOGIN_FAILURE action
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        return { success: false, error: error.message };
    }
};

// Action Creators
export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { username, email, password } = await register(formData);

        dispatch({ type: SIGN_UP_SUCCESS, payload: { username, email, password } });
        navigate('/dashboard');
        return { success: true };
    } catch (error) {
        dispatch({ type: SIGN_UP_FAILURE, payload: error.message });
        return { success: false, error: error.message };
    }
};

export const logout = (navigate) => (dispatch) => {
    dispatch({ type: LOGOUT });
    navigate('/auth');
};