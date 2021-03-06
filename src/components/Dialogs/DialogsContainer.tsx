import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC, InitialStateType} from "../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";

type mapStateToProps = InitialStateType
type mapDispatchToProps = {
    onChange: (text: string) => void
    onClick: (newMessageText: string)=>void
    isAuth: boolean
}
export type DialogsPropsType = mapStateToProps & mapDispatchToProps


const mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onClick: (newMessageText: string)=> dispatch(addMessageAC(newMessageText))
    }

}

export const DialogsContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs) /*WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))*/



