import { ADD_A_COMMENT,
         DEFINE_CURRENT_USER } from '../UI/Post/actions/actionTypes'


const initialState = {
    users: [
        {
            id:1,
            name: 'Pesho',
            srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            followedUsers: [],
            followersOfMe: [],
            posts: [
                {
                    id: 1,
                    circleImgWidth: 30,
                    srcPostPic: "https://cdn.wallpapersafari.com/64/8/JqlzeV.jpg",
                    comments:[],
                    description: '',
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    likes: 0,

                },
                {
                    id: 2,
                    circleImgWidth: 30,
                    srcPostPic: "https://cdn.wallpapersafari.com/64/8/JqlzeV.jpg",
                    srcProfilePic: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[],
                    description: '',
                    likes: 10
                }
            ]
        },{}
    ],
    currentUser: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_A_COMMENT: {
            console.log('addComment')
            return
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