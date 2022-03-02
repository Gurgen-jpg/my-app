import React from "react";
import s from "./../Dialogs.module.css";
import {MessageTypeProps} from "../../redux/state";




const Message = (props: MessageTypeProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;