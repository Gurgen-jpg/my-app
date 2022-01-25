import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import {dialogsType, messageType} from "../../App";



type DialogsPropsType = {
    state : {
        dialogs: Array<dialogsType>,
        message: Array<messageType>
    }
}
const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements =
        props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement =
        props.state.message.map( m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )

}

export default Dialogs;