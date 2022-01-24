import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string;
    id: number;
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type MessageProps = {
    message: string;
    id: number;
};

const Message = (props: MessageProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Gurgen'},
        {id: 2, name: 'Katiy'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Kirill'}
    ]
    let messageData = [
        {id: 1, message: 'How is your IT'},
        {id: 2, message: 'Yooo'},
        {id: 3, message: 'Hello man'},
        {id: 4, message: 'Hey!'}
    ]
    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = messageData.map( message => <Message message={message.message} id={message.id}/>);

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