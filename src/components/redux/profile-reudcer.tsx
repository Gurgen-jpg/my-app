import {ActionsTypes, AppStateType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI} from "../Dal/api";
import {ThunkAction} from "redux-thunk";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = {
    profile: PType
    posts: PostType[]
    newPostText: string
}
export type ProfileResponse = PType;

export type PType = null | {
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
        case 'ADD-POST':
            let newPost = {
                id: state.posts.at(-1)!.id + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = ''
            return {
                ...state, posts: [...state.posts, newPost]
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state, newPostText: action.newText
            }
        case 'SET-USERS-PROFILE': {
            return {
                ...state, profile: action.payload.profile
            }
        }

        default:
            return state
    }
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export let addPostActionCreator = (): AddPostActionType => {
    return ({type: 'ADD-POST'} as const)
}
export type UpdateNewPostTextActonType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export let onPostOnchangeActionCreator = (text: string): UpdateNewPostTextActonType => {
    return ({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const)
}
export type SetUsersProfileACType = {
    type: 'SET-USERS-PROFILE'
    payload: {
        profile: PType
    }
}
export const setUsersProfileAC = (profile: PType) => {
    return ({
        type: 'SET-USERS-PROFILE',
        payload: {profile}
    } as const)
}

export const getProfileThunk = (userId: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUsersProfileAC(data))
    }
}