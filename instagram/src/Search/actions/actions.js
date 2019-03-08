import { SEARCH_FOR_USERS } from './actionsTypes';

export const searchForUsers = requestedUids => {
    return {
        type: SEARCH_FOR_USERS,
        requestedUids
    }
} 