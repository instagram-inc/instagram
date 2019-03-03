import { DEFINE_CURRENT_USER } from '../UI/Post/actions/actionTypes'
import { ADD_NEW_COMMENT } from '../UI/AddAComment/actions/actionsTypes';



const initialState = {
    users: [
        {
            uid:1,
            name: 'Pesho',
            srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            followedUsers: [],
            followersOfMe: [],
            posts: [
                {
                    pid: 1,
                    circleImgWidth: 30,
                    srcPostPic: "https://cdn.wallpapersafari.com/64/8/JqlzeV.jpg",
                    comments:[
                        {
                        userName: 'Tosho',
                        comment: 'Много як пост браааааат! НапраУ пръскаааш!',
                        cid: 1
                        },
                        {
                        userName: 'Niki',
                        comment: 'Всичко свърши!',
                        cid: 2
                        }
                    ],
                    description: '',
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    likes: 0,

                },
                {
                    pid: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10
                }
            ]
        },{}
    ],
    currentUser: (JSON.parse(sessionStorage.getItem('currentUser'))) ? JSON.parse(sessionStorage.getItem('currentUser')) : null
}

const reducer = (state = initialState, action) => {
    console.log('jjjjjjjjjjjjjjjjjjj')
    switch (action.type) {
        case ADD_NEW_COMMENT: {
            //За момента не барай защото работи
            const stateUsers = [...state.users]
            console.log(stateUsers)
            console.log(action)
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.comment.userId)
            console.log(currentUserIndex)
            const currentUser = stateUsers[currentUserIndex]
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.comment.postId)
            console.log(currentPost);
            const comments = currentUser.posts[currentPost].comments.slice();
            comments.push({userName: currentUser.name, cid: action.comment.newCommentId, comment: action.comment.newComment});
            currentUser.posts[currentPost].comments = comments;
            stateUsers.splice(currentUserIndex, 1, currentUser);
            console.log('----------------')
            console.log(stateUsers)
            // return {...state, currentUser}
            return {...state, users: stateUsers.splice(currentUserIndex, 1, currentUser)}
        }

        case DEFINE_CURRENT_USER: {
            const newState = {...state, currentUser: state.users.find(user => user.id === action.userID)}
            console.log(newState)
            return newState 
        }

        default: return state;
    };
    

}

export default reducer