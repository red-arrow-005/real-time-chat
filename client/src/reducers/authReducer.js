import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../constants/actionTypes';

const initialState = {
    data: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {
                ...state,
                data: action.payload,
                error: null,
            };
        case SIGN_UP_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state,
                data: null,
                error: action.payload,
            };
        case LOGOUT:
            localStorage.clear();
            return { ...state, data: null, error: null };
        default:
            return state;
    }
};

export default authReducer;
