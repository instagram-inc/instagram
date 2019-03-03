import { TOGGLE_IS_POST_LIKED } from './actionTypes';

export const toggleLiked = status => {
    return {
        type: TOGGLE_IS_POST_LIKED,
        status
    }
} 