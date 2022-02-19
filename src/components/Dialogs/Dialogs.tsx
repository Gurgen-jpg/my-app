import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogs/DialogItem";
import Message from "./message/message";
import {dialogsType, messageType} from "../../App";


type DialogsPropsType = {
    state: {
        dialogs: Array<dialogsType>,
        message: Array<messageType>
    }
}
const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement =
        props.state.message.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    
    const onClickHandler = () => {
      let message = newMessageElement.current!.value;
      alert(message)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}

                    <textarea ref={newMessageElement}></textarea>
                    <button className={s.button} onClick={onClickHandler}>send</button>

            </div>

        </div>
    )

}

export default Dialogs;