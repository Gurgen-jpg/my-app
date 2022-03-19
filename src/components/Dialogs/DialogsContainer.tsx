import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";
import {StoreType} from "../../App";

import {addMessageCreator, updateNewMessageText} from "../redux/dialogs-reducer";


export const DialogsContainer = (props: StoreType) => {
    let state = props.store.getState().dialogsPage

    /*let dialogsElements =
        props.store.getState().dialogsPage.dialogs;
    let messagesElement =
        props.store.getState().dialogsPage.message;*/

    const onChange = (text: string) => {
        props.store.dispatch(updateNewMessageText(text))
    }
    const onClick = () => {
        props.store.dispatch(addMessageCreator())
    }



    return <Dialogs onChange={onChange}
                    onClick={onClick}
                    value={props.store.getState().dialogsPage.newMessageText}
                    messagePage={state}
    />
};

