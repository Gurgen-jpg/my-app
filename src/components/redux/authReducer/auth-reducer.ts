import {ActionsTypes, AppStateType} from "../reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../../Dal/api";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATE = 'SET-USER-DATE';
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
}
const initialState: InitialStateType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATE':
            return {
                ...state, data: action.data, isAuth: true
            }
        default:
            return state
    }
}

export type AuthActionsType = SetUserDateACType

export type SetUserDateACType = ReturnType<typeof setUserDateAC>

export const setUserDateAC = (id: number | null, email: string | null, login: string | null) => ({
    type: 'SET-USER-DATE',
    data: {
        id,
        email,
        login,
    }
} as const)


export const setAuthThunkC = (): ThunkAction<void , AppStateType, unknown, ActionsTypes> => {
    return async (dispatch , getState) => {
        let data = await authAPI.getAuth()

       /* (authAPI.getAuth())
            .then((data: ResponseAuthType) => {*/
                if (data.resultCode === 0) {
                    dispatch(setUserDateAC(data.data.id, data.data.email, data.data.login))
                }
            /*})*/
    }
}