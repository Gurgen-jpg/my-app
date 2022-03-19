import { createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reudcer";
import {dialogsReducer} from "./dialogs-reducer";


let reducers = combineReducers( {
    profileReducer,
    dialogsReducer
})
export let store = createStore(reducers)
