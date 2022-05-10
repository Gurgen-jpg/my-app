import {ActionsTypes, AppStateType} from "./reduxStore";
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
    status: string
}
export type ProfileResponse = PType ;
export type ResponseStatusType = string;
export type ResponseStatusUpdateType = {
    resultCode: number
    messages:string
    data: string
}
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
    status: null

}


let initialState: InitialStateType = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
        {id: 2, message: '"Hi, how are you?"', likesCount: 20}
    ],
    newPostText: '',
    status: 'no status'
}
export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: state.posts.at(-1)!.id + 1,
                message: action.newPostText,
                likesCount: 0
            };
            state.newPostText = ''
            return {
                ...state, posts: [...state.posts, newPost]
            }
/*        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state, newPostText: action.newText
            }*/
        case 'SET-USERS-PROFILE': {
            return {
                ...state, profile: action.payload.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
}
export type AddPostACType = ReturnType<typeof addPostAC>
/*export type UpdateNewPostTextActonType = ReturnType<typeof onPostOnchangeAC>*/
export type SetUsersProfileACType = ReturnType<typeof setUsersProfileAC>
export type setStatusACType = ReturnType<typeof setStatusAC>

export let addPostAC = (newPostText: string) => {
    return ({type: 'ADD-POST', newPostText} as const)
}
/*export let onPostOnchangeAC = (text: string) => {
    return ({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const)
}*/
export const setUsersProfileAC = (profile: PType) => {
    return ({
        type: 'SET-USERS-PROFILE',
        payload: {profile}
    } as const)
}
export const setStatusAC = (status: string) => {
  return ({
      type: 'SET-STATUS',
      status: status
  } as const)
}

export const getProfileThunk = (userId: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUsersProfileAC(data))
    }
}
export const getStatusThunk = (userId: string | undefined): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(data))
    }
}
export const updateStatusThunk = (status: string): ThunkAction < Promise<void>, AppStateType, unknown, ActionsTypes > => {
    return async (dispatch, getState) =>{
        let data = await profileAPI.updateStatus(status)
        dispatch(setStatusAC(status))
    }
}

