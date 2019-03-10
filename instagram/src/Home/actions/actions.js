import { ADD_A_FOLLOWER_TO_CURRENT_USER } from './actionsTypes';

export const addAfollowed = status => {
    return {
        type: ADD_A_FOLLOWER_TO_CURRENT_USER,
        status
    };
}; 