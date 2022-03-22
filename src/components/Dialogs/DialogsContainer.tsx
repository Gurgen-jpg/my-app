import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";


import {addMessageCreator, updateNewMessageText} from "../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store)=> {
                let state = store.getState().dialogsPage

                /*let dialogsElements =
                    props.store.getState().dialogsPage.dialogs;
                let messagesElement =
                    props.store.getState().dialogsPage.message;*/

                const onChange = (text: string) => {
                    store.dispatch(updateNewMessageText(text))
                }
                const onClick = () => {
                    store.dispatch(addMessageCreator())
                }

             return   <Dialogs onChange={onChange}
                         onClick={onClick}
                         value={store.getState().dialogsPage.newMessageText}
                         messagePage={state}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

