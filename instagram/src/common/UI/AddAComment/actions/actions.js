import { ADD_NEW_COMMENT } from './actionsTypes';

export const addNewComment = comment => {
    return {
        type: ADD_NEW_COMMENT,
        comment
    };
}; 