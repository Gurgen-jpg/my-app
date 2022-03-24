import { createStore, combineReducers} from "redux"
import {AddPostActionType, profileReducer, UpdateNewPostTextActonType} from "./profile-reudcer";
import {AddNewMessage, dialogsReducer, UpdateNewMessage} from "./dialogs-reducer";


export type AppStateType = ReturnType<typeof rootReducer> // rootReducer возвращает стейт, я беру ТИП СТЕЙТА
export type ActionsTypes = UpdateNewMessage | AddNewMessage | AddPostActionType | UpdateNewPostTextActonType

let rootReducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(rootReducer)

