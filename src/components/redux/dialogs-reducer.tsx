import {ActionsTypes, AddNewMessage, MessagePageTypeProps, UpdateNewMessage} from "./store";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState:MessagePageTypeProps = {
    dialogs: [
        {id: 1, name: 'Gurgen'},
        {id: 2, name: 'Katiy'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Kirill'}
    ],
    message: [
        {id: 1, message: 'How is your IT'},
        {id: 2, message: 'Yooo'},
        {id: 3, message: 'Hello man'},
        {id: 4, message: 'Hey!'}
    ],
    newMessageText: ''
}
export const dialogsReducer = (state= initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.newMessageText = ""
            state.message.push(newMessage)
            return state;
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state
    }
}
export const addMessageCreator = (): AddNewMessage => {
    return ({
        type: ADD_NEW_MESSAGE
    })
}
export const updateNewMessageText = (text: string): UpdateNewMessage => {
    return ({
        type: UPDATE_NEW_MESSAGE,
        newMessageText: text
    })
}