import { createStore, combineReducers} from "redux"
import {AddPostActionType, profileReducer, SetUsersProfileACType, UpdateNewPostTextActonType} from "./profile-reudcer";
import {AddNewMessage, dialogsReducer, UpdateNewMessage} from "./dialogs-reducer";
import {
    FollowACType, followingInProgressACType, IsFetchingACType,
    SetPageACType,
    SetTotalUsersCountACType,
    SetUsersACType,
    UnFollowACType,
    usersReducer
} from "./users-reducer";
import {authReducer, SetUserDateACType} from "./authReducer/auth-reducer";


export type AppStateType = ReturnType<typeof rootReducer> // rootReducer возвращает стейт, я беру ТИП СТЕЙТА
export type ActionsTypes = UpdateNewMessage | AddNewMessage | AddPostActionType | UpdateNewPostTextActonType | SetPageACType
| FollowACType | UnFollowACType | SetUsersACType | SetTotalUsersCountACType | IsFetchingACType | SetUsersProfileACType
| SetUserDateACType | followingInProgressACType
let rootReducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export let store = createStore(rootReducer)

//@ts-ignore
window.store = store