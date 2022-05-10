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
        case 'ADD-NEW-MESSAGE': {
            let newMessage = {
                id: Date.now(),
                message: action.newMessageText
            }
            state.newMessageText = ""
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }

        /*case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessageText
            }*/
        default:
            return state
    }
}


export type AddNewMessageType = ReturnType<typeof addMessageAC>
export const addMessageAC = (newMessageText: string) => {
    return ({
        type: 'ADD-NEW-MESSAGE',
        newMessageText
    } as const)
}

/*
export type UpdateNewMessage = {
    type: 'UPDATE-NEW-MESSAGE',
    newMessageText: string
}
export const updateNewMessageText = (text: string): UpdateNewMessage => {
    return ({
        type: UPDATE_NEW_MESSAGE,
        newMessageText: text
    })
}*/
