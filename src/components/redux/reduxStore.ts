import { createStore, combineReducers} from "redux"
import {AddPostActionType, profileReducer, UpdateNewPostTextActonType} from "./profile-reudcer";
import {AddNewMessage, dialogsReducer, UpdateNewMessage} from "./dialogs-reducer";
import {FollowACType, SetUsersACType, UnFollowACType} from "./users-reducer";


export type AppStateType = ReturnType<typeof rootReducer> // rootReducer возвращает стейт, я беру ТИП СТЕЙТА
export type ActionsTypes = UpdateNewMessage | AddNewMessage | AddPostActionType | UpdateNewPostTextActonType
| FollowACType | UnFollowACType | SetUsersACType

let rootReducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(rootReducer)

