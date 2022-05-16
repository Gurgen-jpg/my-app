import {ActionsTypes, AppStateType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";
import {authAPI} from "../Dal/api";
import {setAuthThunkC} from "./authReducer/auth-reducer";
import {Dispatch} from "redux";

export type InitialStateType = typeof initialState
const initialState = {
    isInitial: false
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "AUTHORIZED": {
            return {
                isInitial: true
            }
        }
    }
}

export const authorizedAC = () => {
    return {
        type: 'AUTHORIZED',
    } as const
}
export type AuthorizedACType = ReturnType<typeof authorizedAC>

export const authorizeThunkC = () => async (dispatch: Dispatch) => {
    await dispatch(setAuthThunkC())
    dispatch(authorizedAC())


}

