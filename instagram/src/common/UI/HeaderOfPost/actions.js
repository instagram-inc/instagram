import { DELETE_USER,
        DELETE_POST } from './actionTypes';

export const deleteUser = uid => {
    return {
        type: DELETE_USER,
        uid
    };
}; 

export const deletePost = (uid, pid) => {
    return {
        type: DELETE_POST,
        uid,
        pid
    };
}; 