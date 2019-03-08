import { DEFINE_CURRENT_USER,
    NEW_USER,
    LOGIN_USER,
    LOGOUT_USER  } from '../UI/Post/actions/actionTypes'
import { ADD_NEW_COMMENT } from '../UI/AddAComment/actions/actionsTypes';
import { TOGGLE_IS_POST_LIKED, TOGGLE_IS_POST_SAVED } from '../UI/ActivityIcons/actions/actionTypes';
import { ADD_A_FOLLOWER_TO_CURRENT_USER } from '../../Home/actions/actionsTypes'
import { ADD_NEW_POST } from '../../Upload/actions/actionsTypes'


const initialState = {
    users: [
        {
            uid:1,
            name: 'Pesho',
            circleImgWidth: 30,
            pass: '123456',
            email: 'asd@asd.bg',
            srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            followedUsers: [3],
            followersOfMe: [],
            savedPosts:[{uid: 1, pid: 2}, {uid: 5, pid:1}],
            posts: [
                {   
                    uid:1,
                    pid: 1,
                    srcPostPic: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[
                         {
                        userName: {
                            name: 'Tosho',
                            uid: 3
                        },
                        comment: 'Много як пост браааааат! НапраУ пръскаааш!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'Niki',
                            uid: 2
                        },
                        comment: 'Всичко свърши!',
                        cid: 2
                        }
                    ],
                    description: 'Невероятна разходка в парка (happy) :)',
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    likes: 543,
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {   
                    uid:1,
                    pid: 2,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: 'Време е за балкан и паржолкииии...',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                }
            ]
        },
        {
            uid:2,
            name: 'Gosho',
            pass: '123456',
            email: 'a@a.bg',
            circleImgWidth: 30,
            srcProfilePic: "http://www.howtogeek.com/wp-content/uploads/2016/11/650x433xfreddie.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.X9S8A5J_bd.jpg",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            posts: [
                {
                    uid:2,
                    pid: 1,
                    srcPostPic: "http://expressions-productions.com/wp-content/uploads/2017/09/cars-wallpaper-portrait-thegem-gallery-masonry-100.jpg",
                    comments:[
                        {
                        userName: {
                            name: 'Tosho',
                            uid: 3
                        },
                        comment: 'Много як пост браааааат! НапраУ пръскаааш!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'Niki',
                            uid: 2
                        },
                        comment: 'Всичко свърши!',
                        cid: 2
                        }
                    ],
                    description: 'Да ми е честита новата кола!',
                    likes: 543,
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    uid:2,
                    pid: 2,
                    srcPostPic: "https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/lamborghini/lamborghini-other/2019-lambo-urus/01-2019-lamborghini-urus-oem.jpg",
                    comments:[],
                    description: '#power #cars #rage',
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
                    uid:3,
                    pid: 1,
                    srcPostPic: "https://www.justbake.in/userfiles/pure-punch-1kg-cake.jpg",
                    comments:[
                         {
                        userName: {
                            name: 'Tosho',
                            uid: 3
                        },
                        comment: 'Много як пост браааааат! НапраУ пръскаааш!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'Niki',
                            uid: 2
                        },
                        comment: 'Всичко свърши!',
                        cid: 2
                        }
                    ],
                    description: '#homeMade #cake',
                    likes: 543,
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {   
                    uid:3,
                    pid: 2,
                    srcPostPic: "https://www.eatingonadime.com/wp-content/uploads/2016/07/easy-homemade-blueberry-muffins.jpg",
                    comments:[],
                    description: 'Едни мъфинчета, като за през уикенда :)))',
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
                    uid:4,
                    pid: 1,
                    srcPostPic: "https://wallpapersfit.com/wp-content/uploads/data/2017/11/27/Amazing-Military-Pictures-1WC300126.jpg",
                    comments:[
                         {
                        userName: {
                            name: 'Tosho',
                            uid: 3
                        },
                        comment: 'Много як пост браааааат! НапраУ пръскаааш!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'Niki',
                            uid: 2
                        },
                        comment: 'Всичко свърши!',
                        cid: 2
                        }
                    ],
                    description: 'Тук воювам и спасявам малки кученца...',
                    likes: 543,
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    uid: 4,
                    pid: 2,
                    srcPostPic: "https://www.armytimes.com/resizer/LRaSu_1582g-U25Kexw5gQCPeak=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/4ICIOXH5YZH7JETGADYG6PQWYY.jpg",
                    comments:[],
                    description: 'Един нормален работен ден :)',
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
                    uid:5,
                    pid: 1,
                    srcPostPic: "https://i.pinimg.com/originals/35/74/d0/3574d07df916fd207e111de6cde7843f.jpg",
                    comments:[
                        {
                        userName: {
                            name: 'Tosho',
                            uid: 3
                        },
                        comment: 'Много як пост браааааат! НапраУ пръскаааш!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'Niki',
                            uid: 2
                        },
                        comment: 'Всичко свърши!',
                        cid: 2
                        }
                    ],
                    description: '#mnogoSymKrasiva',
                    likes: 543,
                    isThisPostLiked: false,
                    isThisPostSaved: false

                },
                {
                    uid:5,
                    pid: 2,
                    srcPostPic: "https://i.pinimg.com/originals/91/9f/6d/919f6d84985c345a1e714ca968020856.jpg",
                    comments:[],
                    description: '#mood #perfect #day',
                    likes: 10,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                },
                {
                    uid:5,
                    pid: 3,
                    srcPostPic: "https://www.portraitprofessional.com/img/page-images/homepage/v18/slider/layers-B.jpg",
                    comments:[],
                    description: '#newHairColor',
                    likes: 250,
                    isThisPostLiked: false,
                    isThisPostSaved: false,
                },
                {
                    uid:5,
                    pid: 4,
                    srcPostPic: "https://data.whicdn.com/images/47137307/original.jpg",
                    comments:[],
                    description: '#kifla#kroasan#ponichka#banichka',
                    likes: 250,
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
    switch (action.type) {
        case ADD_NEW_COMMENT: {
            //За момента не барай защото работи
            const stateUsers = [...state.users]
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.comment.userId)
            const currentUser = stateUsers[currentUserIndex]
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.comment.postId)
            const comments = currentUser.posts[currentPost].comments.slice();
            const userName = {name: state.currentUser.user.name, uid: state.currentUser.user.uid} 
            console.log(userName)
            comments.push({userName, cid: action.comment.newCommentId, comment: action.comment.newComment});
            currentUser.posts[currentPost].comments = comments;
            stateUsers.splice(currentUserIndex, 1, currentUser);
            return {...state, users: stateUsers}
        }

        case DEFINE_CURRENT_USER: {
            const newState = {...state, currentUser: state.users.find(user => user.id === action.userID)}
            return newState 
        }
        
        case NEW_USER: {
            const newUser = action.user;
            newUser.srcProfilePic = 'http://imperialsoftech.com/images/front/Default_profile_picture.jpg';
            newUser.circleImgWidth = 30;
            return {...state, users: [...state.users, newUser]};
        }
        
        case LOGIN_USER: {
            sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            const isLog = true;
            const users = [...state.users];
            return { ...state, users, currentUser: {...state.currentUser, user: action.user, isLog} };
        }

        case TOGGLE_IS_POST_LIKED: {
            const stateUsers = [...state.users]
            const userIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.status.uid);
            const user = stateUsers[userIndex]
            const userPosts = [...user.posts];
            const currentPost = userPosts.findIndex(post => post.pid === action.status.pid);
            stateUsers[userIndex].posts[currentPost].isThisPostLiked = action.status.isThisPostLiked;
            stateUsers[userIndex].posts[currentPost].likes = action.status.likes;

            return {...state, users: stateUsers}
        }

        case TOGGLE_IS_POST_SAVED: {
            const stateUsers = [...state.users]
            const userIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.status.uid);
            const user = stateUsers[userIndex]
            const userPosts = [...user.posts];
            const currentPost = userPosts.findIndex(post => post.pid === action.status.pid);
            stateUsers[userIndex].posts[currentPost].isThisPostSaved = action.status.isThisPostSaved;
            const uid = action.status.uid;
            const pid = action.status.pid;
            if (action.status.isThisPostSaved){
                const status = {uid,pid};
                stateUsers[userIndex].savedPosts = [status, ...stateUsers[userIndex].savedPosts]
            } else {
                stateUsers[userIndex].savedPosts = stateUsers[userIndex].savedPosts.filter(post => post.uid !== uid && post.pid !== pid);
            }
            return {...state, users: stateUsers}
        }

        case ADD_A_FOLLOWER_TO_CURRENT_USER: {
            console.log(action)
            const users = [...state.users]
            const folloedUserIndex = users.findIndex(user => user.uid === action.status.uid);
            const currentUserIndex = users.findIndex(user => user.uid === state.currentUser.user.uid);
            if (action.status.status){
                users[currentUserIndex].followedUsers.push(action.status.uid);
                users[folloedUserIndex].followersOfMe.push(state.currentUser.user.uid);
            } else {
                users[currentUserIndex].followedUsers = users[currentUserIndex].followedUsers.filter(uid => uid !== action.status.uid);
                users[folloedUserIndex].followersOfMe = users[folloedUserIndex].followersOfMe.filter(uid => uid !== state.currentUser.user.uid);
            }
            return {...state, users, currentUser: {...state.currentUser, user: users[currentUserIndex]}}
        }

        case LOGOUT_USER: {
            sessionStorage.removeItem('loggedUser');
            const isLog = false;
            const logOut = null;
            const users = [...state.users];
            return { ...state, users, currentUser: {...state.currentUser, user: logOut, isLog} };
        }

        case ADD_NEW_POST:{
            console.log(action)
            ///POST DEAFALUT VALUES:
            const comments = [];
            const likes = 0;
            const isThisPostLiked = false;
            const isThisPostSaved = false;
            //INCOMEING VALUES:
            const {pid, uid, srcPostPic, description} = action.post;
            //Compile new post:
            const newPost = {pid, uid, srcPostPic, comments, description, likes, isThisPostLiked, isThisPostSaved};
            const stateUsers = [...state.users]
            const userIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.post.uid);
            stateUsers[userIndex].posts.push(newPost);
            return {...state, users: stateUsers}
        }

        default: return state;
    };
    

}

export default reducer