import { ADD_NEW_POST } from './actionsTypes';

export const onAddNewPost = post => {
    return {
        type: ADD_NEW_POST,
        post
    };
}; 