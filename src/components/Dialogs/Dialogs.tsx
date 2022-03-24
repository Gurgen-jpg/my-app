import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget!.value
        props.onChange(text)
    }
    const onClickHandler = () => {
        props.onClick()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} id={m.id}/>)}
                <textarea value={props.newMessageText} onChange={onChangeHandler}></textarea>
                <button className={s.button} onClick={onClickHandler}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;