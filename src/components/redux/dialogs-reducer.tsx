import {ActionsTypes, AddNewMessage, MessagePageTypeProps, UpdateNewMessage} from "./state";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
export const dialogsReducer = (state: MessagePageTypeProps, action: ActionsTypes) => {
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