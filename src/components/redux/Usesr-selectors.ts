import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";


// Можно использовать библиотеку reselector для хэширования. но селект простой и без нее будет норм
const getUserSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUserPage = createSelector(getUserSelector,(users)=> {
    return users
})

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

