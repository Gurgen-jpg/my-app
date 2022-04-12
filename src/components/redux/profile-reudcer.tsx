import {ActionsTypes} from "./reduxStore";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = {
    profile: null | PType
    posts: PostType[]
    newPostText: string
}
export type ProfileResponse = PType;

export type PType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    contacts: {
        github: null | string
        vk: null | string
        facebook: null | string
        instagram: null | string
        twitter: null | string
        website: null | string
        youtube: null | string
        mainLink: null | string
    }
    photos: {
        small: null | string
        large: null | string
    }
}


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USERS-PROFILE';


let initialState: InitialStateType = {
    profile: null,
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
        case SET_USER_PROFILE:
            return  {
                ...state, profile: action.payload.profile
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
export type SetUsersProfileACType = {
    type: 'SET-USERS-PROFILE'
    payload: {
        profile: PType
    }
}
export const setUsersProfileAC = (profile: PType) => {
    return ({
        type: SET_USER_PROFILE,
        profile
    })
}