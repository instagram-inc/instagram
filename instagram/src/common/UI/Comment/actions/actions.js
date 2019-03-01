import { ADD_A_COMMENT } from './actionTypes'

//comment = {userID: id, comment: 'string'};
export const addAComment = comment => {
    return {
        type: ADD_A_COMMENT,
        userID: comment.userID,
        comment: comment.comment
    }

}