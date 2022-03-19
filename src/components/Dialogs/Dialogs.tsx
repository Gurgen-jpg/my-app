import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import { MessagePageTypeProps} from "../redux/store";



type messagePageProps = {
    messagePage: MessagePageTypeProps
    onChange: (text: string) => void
    onClick: () => void
    value: string
}


const Dialogs = (props: messagePageProps) => {

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
                {props.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagePage.message.map(m => <Message message={m.message} id={m.id}/>)}
                <textarea value={props.value} onChange={onChangeHandler}></textarea>
                <button className={s.button} onClick={onClickHandler}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;