import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import {ActionsTypes, MessagePageTypeProps} from "../redux/state";
import {addMessageCreator, updateNewMessageText} from "../redux/dialogs-reducer";


type messagePageProps = {
    messagePage: MessagePageTypeProps
    dispatch:(action: ActionsTypes) => void
}


const Dialogs = (props: messagePageProps) => {


    let dialogsElements =
        props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement =
        props.messagePage.message.map(m => <Message message={m.message} id={m.id}/>);

    /*let newMessageElement = React.createRef<HTMLTextAreaElement>()*/
    
    /*const onClickHandler = () => {
        addMessageCreator()
    }*/
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget!.value
        props.dispatch(updateNewMessageText(text))
    }
    const onClickHandler = () => {
        props.dispatch(addMessageCreator())
    }

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                    <textarea  value={props.messagePage.newMessageText} onChange={onChangeHandler}></textarea>
                    <button className={s.button} onClick={onClickHandler}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;