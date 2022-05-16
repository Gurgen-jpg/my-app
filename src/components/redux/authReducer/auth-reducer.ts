import {ActionsTypes, AppStateType} from "../reduxStore";
import {authAPI} from "../../Dal/api";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";

// ТИПЫ
export type ResponseAuthType = {
    data: {
        id: null | number
        email: null | string
        login: null | string
    }
    resultCode: number
    /*(0 if opearation completed successfullt, other numbers - some error occured)*/
    messages: Array<string>
    /* is empty if resultCode is 0, contains error messages if resultCode is different from 0*/
}

export type InitialStateType = {
    data: {
        id: null | number
        email: null | string
        login: null | string
    }
    isAuth: boolean
    errorMassages: string[]

}
const initialState: InitialStateType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false,
    errorMassages: ['HEll']
}


export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATE':

            return {
                ...state, data: action.payload.data, isAuth: action.payload.isAuth, errorMassages: action.payload.errorMessages
            }
        default:
            return state
    }
}

export type AuthActionsType = SetUserDateACType

export type SetUserDateACType = ReturnType<typeof setUserDateAC>

export const setUserDateAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean, errorMessages: string[] ) => {
    return {
        type: 'SET-USER-DATE',
        payload: {
            data: {
                id,
                email,
                login,
            },
            isAuth,
            errorMessages,
        }
    } as const
}

export const setAuthThunkC = (): any/*ThunkAction<void, AppStateType, unknown, ActionsTypes >*/ => {
    return async (dispatch: Dispatch) => {
        let data = await authAPI.getAuth()
        if (data.resultCode === 0) {
            dispatch(setUserDateAC(data.data.id, data.data.email, data.data.login, true, []))
        }
    }
}
export const loginThunkC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch, getState) => {

        let data = await authAPI.login(email, password, rememberMe)
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(setAuthThunkC())
        } else {dispatch(setUserDateAC(null, null, null, false, data.messages))}
    }
}
export const logoutThunkC = (): ThunkAction<void, AppStateType, unknown, ActionsTypes> => {

    return async (dispatch, getState) => {
        let data = await authAPI.logout()
        if (data.data.resultCode === 0) {
            dispatch(setUserDateAC(null, null, null, false, []))
        }
    }
}
