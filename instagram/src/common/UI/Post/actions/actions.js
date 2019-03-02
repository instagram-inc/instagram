import { ADD_A_COMMENT,
         DEFINE_CURRENT_USER,
         NEW_USER } from './actionTypes'

//comment = {userID: id, comment: 'string'};
export const addAComment = comment => {
    return {
        type: ADD_A_COMMENT,
        userID: comment.userID,
        comment: comment.comment
    }

}

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