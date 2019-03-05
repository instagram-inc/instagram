import { DEFINE_CURRENT_USER,
    NEW_USER,
    LOGIN_USER  } from '../UI/Post/actions/actionTypes'
import { ADD_NEW_COMMENT } from '../UI/AddAComment/actions/actionsTypes';
import { TOGGLE_IS_POST_LIKED } from '../UI/ActivityIcons/actions/actionTypes';


const initialState = {
    users: [
        {
            uid:1,
            acc: 'Pesho',
            pass: '123456',
            email: 'asd@asd.bg',
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
                    likes: 543,
                    isThisPostLiked: false

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
        }
    ],
    currentUser: {
        user : (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser')) : null,
        isLog : false
    }
}

const reducer = (state = initialState, action) => {
    console.log('jjjjjjjjjjjjjjjjjjj')
    console.log('tova e currentUser: ' + state.currentUser)
    console.log('tova e systoqnieto: ' + state.currentUser.isLog)
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
            return newState 
        }
        
        case NEW_USER: {
            return {...state, users: [...state.users, action.user]};
        }
        
        case LOGIN_USER: {
            sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            let loggedUser = action.user;
            // return { ...state, currentUser: {...state.currentUser, isLog: true}}
            const currentUser = {...state.currentUser};
            currentUser.user = loggedUser;
            currentUser.isLog = true;
            return { currentUser };
                 
            // let loggedUser = action.user;
            // let stateCurrentUSer = {...state, ...state.currentUser : loggedUser};

            // return {...state, currentUser: {...state.currentUser, loggedUser}};
            // let currentUser = {...state.currentUser};
            // currentUser = loggedUser;
            // return {...state, currentUser: loggedUser};
        }

        case TOGGLE_IS_POST_LIKED: {
            const stateUsers = [...state.users]
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.status.uid);
            const currentUser = stateUsers[currentUserIndex]
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.status.pid);
            stateUsers[currentUserIndex].posts[currentPost].isThisPostLiked = action.status.isThisPostLiked;
            stateUsers[currentUserIndex].posts[currentPost].likes = action.status.likes;
            return {...state, users: stateUsers.splice(currentUserIndex, 1, currentUser)}
        }

        default: return state;
    };
    

}

export default reducer