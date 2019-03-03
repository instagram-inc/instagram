import { DEFINE_CURRENT_USER } from './actionTypes'



export const defineCurrentUser = () => {
    return {
        type: DEFINE_CURRENT_USER,
        userID: JSON.parse(sessionStorage.getItem('currentUserId'))
    }
}