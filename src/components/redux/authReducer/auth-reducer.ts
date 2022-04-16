import {ActionsTypes} from "../reduxStore";

const SET_USER_DATE = 'SET-USER-DATE';
// ТИПЫ
export type AuthType = {
    id: null | number
    email: null | string
    login: null | string
    resultCode: number
    /*(0 if opearation completed successfullt, other numbers - some error occured)*/
    messages: Array<string>
    /* is empty if resultCode is 0, contains error messages if resultCode is different from 0*/
}
export type InitialStateType = {
    data: AuthType | null
}
export type AuthResponseType = /*AuthType &*/ {
    data: {

        id: null | number
        email: null | string
        login: null | string

        resultCode: number
        /*(0 if opearation completed successfullt, other numbers - some error occured)*/
        messages: Array<string>
        /* is empty if resultCode is 0, contains error messages if resultCode is different from 0*/
    }
}


export const initialState: InitialStateType = {
    data: null
}
export const authReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state, data: action.data
            }
        default:
            return state
    }
}

export type SetUserDateACType = {
    type: 'SET-USER-DATE',
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}
export const setUserDateAC = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATE,

    data: {
        id,
        email,
        login,
    }
})