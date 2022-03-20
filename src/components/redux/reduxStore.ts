import { createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reudcer";
import {dialogsReducer} from "./dialogs-reducer";


export type ReduxStoreType = typeof store
export type StoreType = {
    store: ReduxStoreType

}
let reducers = combineReducers( {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export let store = createStore(reducers)

