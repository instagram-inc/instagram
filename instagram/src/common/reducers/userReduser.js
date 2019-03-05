import { DEFINE_CURRENT_USER,
    NEW_USER,
    LOGIN_USER,
    LOGOUT_USER  } from '../UI/Post/actions/actionTypes'
import { ADD_NEW_COMMENT } from '../UI/AddAComment/actions/actionsTypes';
import { TOGGLE_IS_POST_LIKED, TOGGLE_IS_POST_SAVED } from '../UI/ActivityIcons/actions/actionTypes';


const initialState = {
    users: [
        {
            uid:1,
            name: 'Pesho',
            circleImgWidth: 30,
            pass: '123456',
            email: 'asd@asd.bg',
            srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            posts: [
                {
                    pid: 1,
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
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    pid: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                }
            ]
        },
        {
            uid:2,
            name: 'Gosho',
            circleImgWidth: 30,
            srcProfilePic: "http://www.howtogeek.com/wp-content/uploads/2016/11/650x433xfreddie.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.X9S8A5J_bd.jpg",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            posts: [
                {
                    pid: 1,
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
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    pid: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                }
            ]
        },
        {
            uid:3,
            name: 'Mimi',
            srcProfilePic: "https://farm1.staticflickr.com/475/18784149924_a2132a1c25_b.jpg",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            circleImgWidth: 30,
            posts: [
                {
                    pid: 1,
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
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    pid: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                }
            ]
        },
        {
            uid:4,
            name: 'Asparuh',
            circleImgWidth: 30,
            srcProfilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa1wlPR5G3qWNQ_vI-Vylq-x4jMuasvONZxnIdh4I6uTbV80R9A",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            posts: [
                {
                    pid: 1,
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
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    pid: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                }
            ]
        },
        {
            uid:5,
            name: 'Conka',
            srcProfilePic: "https://i.pinimg.com/originals/de/da/81/deda811e570b5395e8e2affe66e72996.jpg",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            circleImgWidth: 30,
            posts: [
                {
                    pid: 1,
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
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    pid: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
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
    console.log('tova e currentUser: ')
    console.log(state.currentUser)
    console.log('tova e systoqnieto: ' + state.currentUser.isLog)
    console.log('vsichki useri' + state.users)
    switch (action.type) {
        case ADD_NEW_COMMENT: {
            //За момента не барай защото работи
            const stateUsers = [...state.users]
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.comment.userId)
            const currentUser = stateUsers[currentUserIndex]
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.comment.postId)
            const comments = currentUser.posts[currentPost].comments.slice();
            comments.push({userName: currentUser.name, cid: action.comment.newCommentId, comment: action.comment.newComment});
            currentUser.posts[currentPost].comments = comments;
            stateUsers.splice(currentUserIndex, 1, currentUser);
            return {...state, users: stateUsers, currentUser: {...currentUser, user: currentUser} }
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
            const isLog = true;
            const users = [...state.users];
            return { ...state, users, currentUser: {...state.currentUser, user: action.user, isLog} };
        }

        case TOGGLE_IS_POST_LIKED: {
            const stateUsers = [...state.users]
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.status.uid);
            const currentUser = stateUsers[currentUserIndex]
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.status.pid);
            stateUsers[currentUserIndex].posts[currentPost].isThisPostLiked = action.status.isThisPostLiked;
            stateUsers[currentUserIndex].posts[currentPost].likes = action.status.likes;
            return {...state, users: stateUsers, currentUser: {...currentUser, user: currentUser}}
        }

        case TOGGLE_IS_POST_SAVED: {
            const stateUsers = [...state.users]
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.status.uid);
            const currentUser = stateUsers[currentUserIndex]
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.status.pid);
            stateUsers[currentUserIndex].posts[currentPost].isThisPostSaved = action.status.isThisPostSaved;
            const uid = action.status.uid;
            const pid = action.status.pid;
            if (action.status.isThisPostSaved){
                const status = {uid,pid};
                stateUsers[currentUserIndex].savedPosts = [status, ...stateUsers[currentUserIndex].savedPosts]
            } else {
                stateUsers[currentUserIndex].savedPosts = stateUsers[currentUserIndex].savedPosts.filter(post => post.uid !== uid && post.pid !== pid);
            }
            return {...state, users: stateUsers, currentUser: {...currentUser, user: currentUser}}
        }

        case LOGOUT_USER: {
            sessionStorage.removeItem('loggedUser');
            const isLog = false;
            const logOut = null;
            const users = [...state.users];
            return { ...state, users, currentUser: {...state.currentUser, user: logOut, isLog} };
        }

        default: return state;
    };
    

}

export default reducer