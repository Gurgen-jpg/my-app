import {letRerenderEntireTree} from "../../Render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
            {id: 2, message: '"Hi, how are you?"', likesCount: 20}
        ],
        newPostText: 'it=kama'
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Gurgen'},
            {id: 2, name: 'Katiy'},
            {id: 3, name: 'Artem'},
            {id: 4, name: 'Kirill'}
        ],
        message: [
            {id: 1, message: 'How is your IT'},
            {id: 2, message: 'Yooo'},
            {id: 3, message: 'Hello man'},
            {id: 4, message: 'Hey!'}
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.at(-1)!.id + 1 ,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    letRerenderEntireTree(state);
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    letRerenderEntireTree(state)
  
}



export default state;