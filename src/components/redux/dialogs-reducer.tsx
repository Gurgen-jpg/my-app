import {ActionsTypes} from "./reduxStore";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Gurgen'},
        {id: 2, name: 'Katiy'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Kirill'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'How is your IT'},
        {id: 2, message: 'Yooo'},
        {id: 3, message: 'Hello man'},
        {id: 4, message: 'Hey!'}
    ] as Array<MessageType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.newMessageText = ""
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }

        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state
    }
}


export type AddNewMessage = {
    type: 'ADD-NEW-MESSAGE'
}
export const addMessageCreator = (): AddNewMessage => {
    return ({
        type: ADD_NEW_MESSAGE
    })
}

export type UpdateNewMessage = {
    type: 'UPDATE-NEW-MESSAGE',
    newMessageText: string
}
export const updateNewMessageText = (text: string): UpdateNewMessage => {
    return ({
        type: UPDATE_NEW_MESSAGE,
        newMessageText: text
    })
}