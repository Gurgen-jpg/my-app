import { createStore, combineReducers, applyMiddleware} from "redux"
import {
    AddPostACType,
    profileReducer, setStatusACType,
    SetUsersProfileACType,
} from "./profile-reudcer";
import {AddNewMessageType, dialogsReducer} from "./dialogs-reducer";
import thunkMiddleware from 'redux-thunk'
import {
    UserActionType,

    usersReducer
} from "./users-reducer";
import {authReducer, AuthActionsType} from "./authReducer/auth-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AuthorizedACType} from "./app-reducer";


export type AppStateType = ReturnType<typeof rootReducer> // rootReducer возвращает стейт, я беру ТИП СТЕЙТА

export type ActionsTypes = AddNewMessageType | SetUsersProfileACType
| AuthActionsType | UserActionType | setStatusACType | AddPostACType | AuthorizedACType

let rootReducer = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: authReducer
})

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store