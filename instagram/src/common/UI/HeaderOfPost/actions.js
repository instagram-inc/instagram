import { DELETE_USER } from './actionTypes';

export const deleteUser = uid => {
    return {
        type: DELETE_USER,
        uid
    }
} 