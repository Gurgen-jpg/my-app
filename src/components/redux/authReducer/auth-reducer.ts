import {ActionsTypes} from "../reduxStore";
import {Dispatch} from "redux";
import {authAPI} from "../../Dal/api";

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
}
const initialState: InitialStateType =
    {
        data: {
            id: null,
            email: null,
            login: null
        }
    }


export const authReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
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

export const setAuthThunkC = () => {
  return (dispatch: Dispatch) => {
      ( authAPI.getAuth())
          .then((data:ResponseAuthType ) => {
              if (data.resultCode === 0) {
                  dispatch(setUserDateAC(data.data.id, data.data.email, data.data.login))
              }
          })
  }
}