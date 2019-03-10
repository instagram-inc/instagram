import { DEFINE_CURRENT_USER,
         NEW_USER,
         LOGIN_USER,
         LOGOUT_USER } from './actionTypes';

export const defineCurrentUser = () => {
    return {
        type: DEFINE_CURRENT_USER,
        userID: JSON.parse(sessionStorage.getItem('currentUserId'))
    };
};

export const addNewUser = user => {
    return {
        type: NEW_USER,
        user
    };
}; 

export const setAsLogged = user => {
    return {
        type: LOGIN_USER,
        user
    };
}; 

export const setNoLoggedUser = () => {
    return {
        type: LOGOUT_USER
    };
};