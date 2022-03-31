import {ActionsTypes} from "./reduxStore";
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = {
    posts: PostType[]
    newPostText: string
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState: InitialStateType= {
    posts: [
        {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
        {id: 2, message: '"Hi, how are you?"', likesCount: 20}
    ],
    newPostText: ''
}
export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.at(-1)!.id + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = ''
            return {
                ...state, posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            }
        default:
            return state
    }
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export let addPostActionCreator = (): AddPostActionType => {
    return ({type: ADD_POST})
}
export type UpdateNewPostTextActonType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export let onPostOnchangeActionCreator = (text: string): UpdateNewPostTextActonType => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })
}
