import {AppStateType} from "./reduxStore";

export const getUserPage = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUserPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getUserCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getUserTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getUserIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getUserFollowing = (state: AppStateType) => {
    return state.usersPage.following
}
export const getUserFilter = (state: AppStateType) => {
    return state.usersPage.filter
}

