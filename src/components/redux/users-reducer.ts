import {ActionsTypes, AppStateType} from "./reduxStore";
import {followAPI, usersAPI} from "../Dal/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

/*const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';*/

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
    users: [] as Array<UType>,
    pageSize: 8,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    following: [0],
    filter: {
        search: ''
    },
}
export type FilterType = typeof initialState.filter;

export type InitialStateType = typeof initialState;


export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            const copy = {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
            return copy;
        }
        case 'UN-FOLLOW': {
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case 'SET-USERS':
            return {
                ...state, users: action.payload.users
            }
        case 'SET-PAGE': {
            return {
                ...state, currentPage: action.payload.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state, totalUserCount: action.payload.totalUserCount
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case "FOLLOWING-IN-PROGRESS": {
            return {
                ...state, following: action.isFetching
                    ? [...state.following, action.userId]
                    : state.following.filter(id => id !== action.userId)
            }
        }
        case "SET-FILTER": {
            return {
                ...state, filter: action.payload
            }
        }
        default:
            return state
    }
}


export type UserActionType = followingInProgressACType | setTotalUsersCountACType | setPageACType
    | followACType | unFollowACType | setUsersACType | toggleIsFetchingAC | setFilterACType

export type followingInProgressACType = ReturnType<typeof followingInProgressAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type setPageACType = ReturnType<typeof setPageAC>
export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type toggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAC>
export type setFilterACType = ReturnType<typeof setFilterAC>


export const followingInProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'FOLLOWING-IN-PROGRESS',
    isFetching,
    userId
} as const)
export const setTotalUsersCountAC = (totalUserCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    payload: {totalUserCount}
} as const)
export const setPageAC = (currentPage: number) => ({
    type: 'SET-PAGE',
    payload:
        {
            currentPage
        }
} as const)
export const followAC = (userID: number) => ({
    type: 'FOLLOW',
    payload: {
        userID
    }
} as const)
export const unFollowAC = (userID: number) => ({type: 'UN-FOLLOW', payload: {userID}} as const)
export const setUsersAC = (users: Array<UType>) => ({type: 'SET-USERS', payload: {users}} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING',
    payload: {
        isFetching
    }
} as const)
export const setFilterAC = (search: string) => ({
    type: 'SET-FILTER',
    payload: {search},
} as const)

//THUNK

export const getUsersThunkC = (currentPage: number, pageSize: number, search: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setFilterAC(search))
        let data = await usersAPI.getUsers(currentPage, pageSize, search)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))

    }
}
export const changePageThunkC = (p: number, pageSize: number, search: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setPageAC(p))
        let data = await usersAPI.getUsers(p, pageSize, search)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items))

    }
}
export const unFollowThunkC = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {
        dispatch(followingInProgressAC(true, userId))
        let data = await followAPI.getUnfollow(userId)
        if (data.data.resultCode === 0) {
            dispatch(unFollowAC(userId))
        }
        dispatch(followingInProgressAC(false, userId))
    }
}
export const followThunkC = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, userId))

        let data = await followAPI.getFollow(userId)

        if (data.data.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(followingInProgressAC(false, userId))

    }
}
