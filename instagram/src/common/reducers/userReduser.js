import { DEFINE_CURRENT_USER,
        NEW_USER,
        LOGIN_USER,
        LOGOUT_USER  } from '../UI/Post/actions/actionTypes';
import { ADD_NEW_COMMENT } from '../UI/AddAComment/actions/actionsTypes';
import { TOGGLE_IS_POST_LIKED, TOGGLE_IS_POST_SAVED } from '../UI/ActivityIcons/actions/actionTypes';
import { ADD_A_FOLLOWER_TO_CURRENT_USER } from '../../Home/actions/actionsTypes';
import { ADD_NEW_POST } from '../../Upload/actions/actionsTypes';
import { DELETE_USER,
        DELETE_POST } from '../UI/HeaderOfPost/actionTypes';
import { SEARCH_FOR_USERS } from '../../Search/actions/actionsTypes';



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
            likedPosts: [],
            savedPosts:[{uid: 1, pid: 2}, {uid: 5, pid:1}],
            posts: [
                {   
                    uid:1,
                    pid: 1,
                    srcPostPic: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[
                         {
                        userName: {
                            name: 'mimi',
                            uid: 3
                        },
                        comment: 'И аз обичам природата!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'pesho',
                            uid: 1
                        },
                        comment: 'Презареждам батериите малко аз :)',
                        cid: 2
                        }
                    ],
                    description: 'Невероятна разходка в парка (happy) :)',
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    likes: 17,
                    
                    

                },
                {   
                    uid:1,
                    pid: 2,
                    srcPostPic: "https://i.pinimg.com/originals/42/73/b7/4273b7c22af24b9d4bade05c28cdc2ac.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: 'Време е за балкан и паржолкииии...',
                    likes: 10,
                    
                    
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
            likedPosts: [],
            savedPosts:[],
            posts: [
                {
                    uid:2,
                    pid: 1,
                    srcPostPic: "http://expressions-productions.com/wp-content/uploads/2017/09/cars-wallpaper-portrait-thegem-gallery-masonry-100.jpg",
                    comments:[
                        {
                        userName: {
                            name: 'pesho',
                            uid: 1
                        },
                        comment: 'Страхотна бегачка!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'mimi',
                            uid: 3
                        },
                        comment: 'Гоше кога ще ме повозиш? ;)',
                        cid: 2
                        }
                    ],
                    description: 'Да ми е честита новата кола!',
                    likes: 543,
                    

                },
                {
                    uid:2,
                    pid: 2,
                    srcPostPic: "https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/lamborghini/lamborghini-other/2019-lambo-urus/01-2019-lamborghini-urus-oem.jpg",
                    comments:[],
                    description: '#power #cars #rage',
                    likes: 87,
                    
                    
                }
            ]
        },
        {
            uid:3,
            name: 'Mimi',
            pass: '123456',
            email: 'mimi@mimi.bg',
            srcProfilePic: "https://farm1.staticflickr.com/475/18784149924_a2132a1c25_b.jpg",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            likedPosts: [],
            circleImgWidth: 30,
            posts: [
                {
                    uid:3,
                    pid: 1,
                    srcPostPic: "https://www.justbake.in/userfiles/pure-punch-1kg-cake.jpg",
                    comments:[
                         {
                        userName: {
                            name: 'pesho',
                            uid: 1
                        },
                        comment: 'Чак ми се дояде и на мен!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'mimi',
                            uid: 3
                        },
                        comment: 'Ще направя една и за теб!',
                        cid: 2
                        }
                    ],
                    description: '#homeMade #cake',
                    likes: 274,
                    
                    

                },
                {   
                    uid:3,
                    pid: 2,
                    srcPostPic: "http://www.runningwithspoons.com/wp-content/uploads/2018/01/One-Bowl-Chocolate-Chip-Banana-Oat-Muffins4.jpg",
                    comments:[],
                    description: 'Едни мъфинчета, като за през уикенда :)))',
                    likes: 468,
                    
                    
                }
            ]
        },
        {
            uid:4,
            name: 'Asparuh',
            circleImgWidth: 30,
            pass: '123456',
            email: 'asparuh@asparuh.bg',
            srcProfilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa1wlPR5G3qWNQ_vI-Vylq-x4jMuasvONZxnIdh4I6uTbV80R9A",
            followedUsers: [],
            followersOfMe: [],
            likedPosts: [],
            savedPosts:[],
            posts: [
                {   
                    uid:4,
                    pid: 1,
                    srcPostPic: "https://wallpapersfit.com/wp-content/uploads/data/2017/11/27/Amazing-Military-Pictures-1WC300126.jpg",
                    comments:[
                         {
                        userName: {
                            name: 'conka',
                            uid: 5
                        },
                        comment: 'Аспарух за мен ти си истински герой!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'Asparuh',
                            uid: 4
                        },
                        comment: 'Благодаря ти Цонче! Без теб нямаше да успея!',
                        cid: 2
                        }
                    ],
                    description: 'Тук воювам и спасявам малки кученца...',
                    likes: 543,
                    
                    

                },
                {
                    uid: 4,
                    pid: 2,
                    srcPostPic: "https://www.armytimes.com/resizer/LRaSu_1582g-U25Kexw5gQCPeak=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/4ICIOXH5YZH7JETGADYG6PQWYY.jpg",
                    comments:[],
                    description: 'Един нормален работен ден :)',
                    likes: 10,
                    
                    
                }
            ]
        },
        {
            uid:5,
            name: 'Conka',
            pass: '123456',
            email: 'conka@conka.bg',
            srcProfilePic: "https://i.pinimg.com/originals/de/da/81/deda811e570b5395e8e2affe66e72996.jpg",
            followedUsers: [],
            followersOfMe: [],
            savedPosts:[],
            likedPosts: [],
            circleImgWidth: 30,
            posts: [
                {
                    uid:5,
                    pid: 1,
                    srcPostPic: "https://i.pinimg.com/originals/35/74/d0/3574d07df916fd207e111de6cde7843f.jpg",
                    comments:[
                        {
                        userName: {
                            name: 'Pesho',
                            uid: 1
                        },
                        comment: 'Много си красива на тази снимка!',
                        cid: 1
                        },
                        {
                        userName: {
                            name: 'gosho',
                            uid: 2
                        },
                        comment: 'На живо си още по хубава :)',
                        cid: 2
                        }
                    ],
                    description: '#mnogoSymKrasiva',
                    likes: 2548,
                    
                    

                },
                {
                    uid:5,
                    pid: 2,
                    srcPostPic: "https://i.pinimg.com/originals/91/9f/6d/919f6d84985c345a1e714ca968020856.jpg",
                    comments:[
                        {
                        userName: {
                            name: 'gosho',
                            uid: 2
                        },
                        comment: 'Много си замислена! Защо не ми звъннеш ;)',
                        cid: 1
                        }
                    ],
                    description: '#mood #perfect #day',
                    likes: 1896,
                    
                    
                },
                {
                    uid:5,
                    pid: 3,
                    srcPostPic: "https://www.portraitprofessional.com/img/page-images/homepage/v18/slider/layers-B.jpg",
                    comments:[
                        {
                            userName: {
                                name: 'mimi',
                                uid: 3
                            },
                            comment: 'You go girl!!!! #bestfirends',
                            cid: 1
                        },
                        {
                            userName: {
                                name: 'conka',
                                uid: 5
                            },
                            comment: 'Мерси Мимче! Много хубави торти правиш!',
                            cid: 2
                        }

                    ],
                    description: '#newHairColor',
                    likes: 1980,
                    
                    
                },
                {
                    uid:5,
                    pid: 4,
                    srcPostPic: "https://data.whicdn.com/images/47137307/original.jpg",
                    comments:[
                        {
                            userName: {
                                name: 'gosho',
                                uid: 2
                            },
                            comment: 'Ти знаеш ли, че имаш страшни очи!',
                            cid: 1
                            }
                    ],
                    description: '#kifla#kroasan#ponichka#banichka',
                    likes: 9875,
                    
                    
                },
                {
                    uid:5,
                    pid: 5,
                    srcPostPic: "https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/1486567824-marilyn-monroe.jpg",
                    comments:[
                        {
                            userName: {
                                name: 'gosho',
                                uid: 2
                            },
                            comment: 'Тази не работеше ли на касата в Била',
                            cid: 1
                        },
                        {
                            userName: {
                                name: 'conka',
                                uid: 5
                            },
                            comment: 'Нищо не разбираш gosho',
                            cid: 2
                        }
                    ],
                    description: '#thebestmodel',
                    likes: 5347,
                    
                    
                },
                {
                    uid:5,
                    pid: 6,
                    srcPostPic: "https://underground-secrets.org/static/uploads/2016/10/titanic-movie.jpg",
                    comments:[],
                    description: '#bestmovie#ever',
                    likes: 7895,
                    
                    
                },
                {
                    uid:5,
                    pid: 7,
                    srcPostPic: "https://www.travelocity.com/inspire/wp-content/uploads/2018/06/romantic-spots-in-Italy-e1529077561159.jpg",
                    comments:[
                        {
                            userName: {
                                name: 'mimi',
                                uid: 3
                            },
                            comment: 'Като се върнеш има много да разказваш!',
                            cid: 1
                            }
                    ],
                    description: '#freespirit#nature#romantic',
                    likes: 3215,
                    
                    
                },
                {
                    uid:5,
                    pid: 8,
                    srcPostPic: "https://cdn.diys.com/wp-content/uploads/2016/06/basket-weave-680x1024.jpg",
                    comments:[
                        {
                            userName: {
                                name: 'mimi',
                                uid: 3
                            },
                            comment: 'Мойто джезве е по-хубаво!',
                            cid: 1
                            }
                    ],
                    description: 'Real italian macchiato #besttasteever',
                    likes: 560,
                    
                    
                }
            ]
        },
        {
            uid:0,
            name: 'admin',
            pass: '123456',
            email: 'admin@admin.bg',
            circleImgWidth: 30,
            srcProfilePic: "http://www.clker.com/cliparts/b/5/c/6/1242811944897241787Warning_notice_-_EVIL_ADMIN.svg.med.png",
            followedUsers: [],
            followersOfMe: [],
            savedPosts: [],
            likedPosts: [],
            posts: []
        }

    ],
    currentUser: {
        user : (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser')) : null,
        isLog : false,
        isAdmin : false
    },
    requestedUids: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_COMMENT: {
            const stateUsers = [...state.users];
            const currentUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.comment.userId);
            const currentUser = stateUsers[currentUserIndex];
            const currentUserPosts = [...currentUser.posts];
            const currentPost = currentUserPosts.findIndex(post => post.pid === action.comment.postId);
            const comments = currentUser.posts[currentPost].comments.slice();
            const userName = {name: state.currentUser.user.name, uid: state.currentUser.user.uid};
            comments.push({userName, cid: action.comment.newCommentId, comment: action.comment.newComment});
            currentUser.posts[currentPost].comments = comments;
            stateUsers.splice(currentUserIndex, 1, currentUser);
            return {...state, users: stateUsers};
        };

        case DEFINE_CURRENT_USER: {
            const newState = {...state, currentUser: state.users.find(user => user.id === action.userID)};
            return newState; 
        };
        
        case NEW_USER: {
            const newUser = action.user;
            newUser.srcProfilePic = 'http://imperialsoftech.com/images/front/Default_profile_picture.jpg';
            newUser.circleImgWidth = 30;
            newUser.savedPosts = [];
            newUser.likedPosts = [];
            return {...state, users: [...state.users, newUser]};
        };
        
        case LOGIN_USER: {
            const ADMIN_EMAIL = 'admin@admin.bg';
            const ADMIN_PASS = '123456';
            sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            let isAdmin = false;
            if (action.user.email === ADMIN_EMAIL && action.user.pass === ADMIN_PASS) {
                isAdmin = true;
                sessionStorage.setItem('isAdmin', JSON.stringify(isAdmin));
            } 
            const isLog = true;
            const users = [...state.users];
            return { ...state, users, currentUser: {...state.currentUser, user: action.user, isLog: isLog, isAdmin: isAdmin} };
        };

        case TOGGLE_IS_POST_LIKED: {
            const stateUsers = [...state.users];
            const currentLikeUserIndex = stateUsers.findIndex(user => user.uid === state.currentUser.user.uid);
            const userIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.status.uid);
            const user = stateUsers[userIndex];
            const userPosts = [...user.posts];
            const currentPost = userPosts.findIndex(post => post.pid === action.status.pid);
            const { uid, pid } = action.status;

            if (!stateUsers[currentLikeUserIndex].likedPosts.some(post => post.uid === uid && post.pid === pid)){
                const status = {uid,pid,};
                stateUsers[userIndex].posts[currentPost].likes = stateUsers[userIndex].posts[currentPost].likes + 1;
                stateUsers[currentLikeUserIndex].likedPosts = [status, ...stateUsers[currentLikeUserIndex].likedPosts];
            } else {
                stateUsers[currentLikeUserIndex].likedPosts = stateUsers[currentLikeUserIndex].likedPosts.filter(post => post.uid !== uid && post.pid !== pid);
                stateUsers[userIndex].posts[currentPost].likes = stateUsers[userIndex].posts[currentPost].likes - 1;
            }
            return {...state, users: stateUsers};

            
        };

        case TOGGLE_IS_POST_SAVED: {
            const stateUsers = [...state.users];
            const curentSaveingUserIndex = stateUsers.findIndex(userIndex => userIndex.uid === state.currentUser.user.uid);
            const { uid, pid } = action.status;

            if (!stateUsers[curentSaveingUserIndex].savedPosts.some(post => post.uid === uid && post.pid === pid)){
                const status = {uid,pid};
                stateUsers[curentSaveingUserIndex].savedPosts = [status, ...stateUsers[curentSaveingUserIndex].savedPosts];
            } else {
                const indexOfPost = stateUsers[curentSaveingUserIndex].savedPosts.findIndex(post => post.uid === uid && post.pid === pid);
                stateUsers[curentSaveingUserIndex].savedPosts.splice(indexOfPost, 1);
            }
            return {...state, users: stateUsers};
        };

        case ADD_A_FOLLOWER_TO_CURRENT_USER: {
            const users = [...state.users];
            const folloedUserIndex = users.findIndex(user => user.uid === action.status.uid);
            const currentUserIndex = users.findIndex(user => user.uid === state.currentUser.user.uid);

            if (action.status.status){
                users[currentUserIndex].followedUsers.push(action.status.uid);
                users[folloedUserIndex].followersOfMe.push(state.currentUser.user.uid);
            } else {
                users[currentUserIndex].followedUsers = users[currentUserIndex].followedUsers.filter(uid => uid !== action.status.uid);
                users[folloedUserIndex].followersOfMe = users[folloedUserIndex].followersOfMe.filter(uid => uid !== state.currentUser.user.uid);
            }
            return {...state, users, currentUser: {...state.currentUser, user: users[currentUserIndex]}};
        };

        case LOGOUT_USER: {
            sessionStorage.removeItem('loggedUser');
            sessionStorage.removeItem('isAdmin');
            const isLog = false;
            const logOut = null;
            const users = [...state.users];
            return { ...state, users, currentUser: {...state.currentUser, user: logOut, isLog} };
        };

        case ADD_NEW_POST:{
            ///POST DEAFALUT VALUES:
            const comments = [];
            const likes = 0;
            //INCOMEING VALUES:
            const {pid, uid, srcPostPic, description} = action.post;
            //Compile new post:
            const newPost = {pid, uid, srcPostPic, comments, description, likes};
            const stateUsers = [...state.users];
            const userIndex = stateUsers.findIndex(userIndex => userIndex.uid === action.post.uid);
            stateUsers[userIndex].posts.push(newPost);
            return {...state, users: stateUsers};
        };

        case DELETE_USER: {
            const newUsers = [...state.users];
            const indexForDelete = newUsers.findIndex(user => user.uid === action.uid);
            newUsers.splice(indexForDelete, 1);
            return {...state, users: newUsers};
        };
        
        case DELETE_POST: {
            const newUsers = [...state.users];
            const user = newUsers.find(user => user.uid === action.uid);
            const indexForDelete = user.posts.findIndex(post => post.pid === action.pid);
            user.posts.splice(indexForDelete, 1);

            return {...state, users: newUsers};
        };

        case SEARCH_FOR_USERS: {
            const requestedUids = action.requestedUids;
            return {...state, requestedUids};
        };

        default: return state;
    };  
};

export default reducer;