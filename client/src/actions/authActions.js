// actions/auth.js

import { register, signin } from '../api/user'
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../constants/actionTypes';


// Action Creators
export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { usernameOrEmail, password } = formData;
        const response = await signin({ usernameOrEmail, password });
        if (response.data.success) {
            // If login is successful, dispatch LOGIN_SUCCESS action
            dispatch({ type: LOGIN_SUCCESS, payload: response.data?.data });
            navigate('/dashboard');
            return { success: true, message: response.data?.message };
        } else {
            // If login fails, dispatch LOGIN_FAILURE action
            dispatch({ type: LOGIN_FAILURE, payload: null });
            return { success: false, message: response.data?.message };
        }
    } catch (error) {
        // If an error occurs during the login process, dispatch LOGIN_FAILURE action
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        return { success: false, message: error.message };
    }
};

// Action Creators
export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const response = await register(formData);
        dispatch({ type: SIGN_UP_SUCCESS, payload: response.data?.data });
        navigate('/dashboard');
        return { success: false, message: response.data.message };
    } catch (error) {
        dispatch({ type: SIGN_UP_FAILURE, payload: error.message });
        return { success: false, message: error.message };
    }
};

export const logout = (navigate) => (dispatch) => {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
    navigate('/auth'); // Redirect to login page after logout
};