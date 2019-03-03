import { DEFINE_CURRENT_USER,
         NEW_USER } from './actionTypes'



export const defineCurrentUser = () => {
    return {
        type: DEFINE_CURRENT_USER,
        userID: JSON.parse(sessionStorage.getItem('currentUserId'))
    }
}

export const addNewUser = user => {
    return {
        type: NEW_USER,
        user
    }
} 