import { TOGGLE_IS_POST_LIKED , TOGGLE_IS_POST_SAVED } from './actionTypes';

export const toggleLiked = status => {
    return {
        type: TOGGLE_IS_POST_LIKED,
        status
    }
}

export const toggleSaved = status => {
    return {
        type: TOGGLE_IS_POST_SAVED,
        status
    }
} 