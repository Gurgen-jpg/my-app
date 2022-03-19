import {ActionsTypes, AddPostActionType, ProfilePageTypeProps, UpdateNewPostTextActonType} from "./store";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState: ProfilePageTypeProps = {
    posts: [
        {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
        {id: 2, message: '"Hi, how are you?"', likesCount: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: state.posts.at(-1)!.id + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}

export let addPostActionCreator = (): AddPostActionType => {
    return ({type: ADD_POST})
}

export let onPostOnchangeActionCreator = (text: string): UpdateNewPostTextActonType => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })
}
