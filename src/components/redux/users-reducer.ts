import {ActionsTypes} from "./reduxStore";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';

export type UsersResponseType = {
    items: UType[]
    totalCount: number
    error: null | string
}
export type UType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}


const initialState = {
    users: [] as Array<UType>
}
export type InitialStateType = typeof initialState;


export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            const copy = {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
            debugger
            return copy;
        }
        case UN_FOLLOW: {
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state
    }
}

export type FollowACType = {
    type: 'FOLLOW'
    payload: {
        userID: number
    }
}
export type UnFollowACType = {
    type: 'UN-FOLLOW'
    payload: {
        userID: number
    }
}
export type SetUsersACType = {
    type: 'SET-USERS'
    payload: {
        users: Array<UType>
    }
}
export const followAC = (userID: number) => ({
    type: FOLLOW,
    payload: {
        userID
    }
})
export const unFollowAC = (userID: number) => ({type: UN_FOLLOW, payload: {userID}})
export const setUsersAC = (users: Array<UType>) => ({type: SET_USERS, payload: {users}})
