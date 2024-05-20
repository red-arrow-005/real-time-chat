import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../constants/actionTypes';

const initialState = {
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
