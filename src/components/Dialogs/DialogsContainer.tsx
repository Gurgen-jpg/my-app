import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreator, InitialStateType, updateNewMessageText} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

import {Dispatch} from "redux";

type mapStateToProps = InitialStateType
type mapDispatchToProps = {
    onChange: (text: string) => void
    onClick: ()=>void
}
export type DialogsPropsType = mapStateToProps & mapDispatchToProps


const mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChange: (text: string) =>
            dispatch(updateNewMessageText(text)),
        onClick: ()=> dispatch(addMessageCreator())
    }

}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



