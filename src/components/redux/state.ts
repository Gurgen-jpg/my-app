import {letRerenderEntireTree} from "../../Render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
            {id: 2, message: '"Hi, how are you?"', likesCount: 20}
        ]
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

export const addPost = (postMessage: string) => {
    let newPost = {
        id: state.profilePage.posts.at(-1)!.id + 1 ,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    letRerenderEntireTree(state);
}



export default state;