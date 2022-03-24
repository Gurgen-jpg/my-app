import {ActionsTypes} from "./reduxStore";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';

export type UserLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    follow: boolean,
    fullName: string
    status: string
    location: UserLocationType
}

const initialState = {
    users: [
        {
            id: 1,
            follow: false,
            fullName: 'Gurgen',
            status: 'manager',
            location: {city: 'Rostov-on-Don', country: 'Russia'}
        },
        {
            id: 2,
            follow: false,
            fullName: 'Katya',
            status: 'manager wife',
            location: {city: 'Rostov-on-Don', country: 'Russia'}
        },
        {
            id: 3,
            follow: false,
            fullName: 'Dima',
            status: 'manager',
            location: {city: 'Sochi', country: 'Russia'}
        }
    ] as Array<UserType>
}
export type InitialStateType = typeof initialState;


const useReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, follow: true} : el)
            }
        case UN_FOLLOW: {
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, follow: false} : el)
            }
        }
        case SET_USERS:
            return  {
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
        users: Array<UserType>
    }
}
export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number) => ({type: UN_FOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
