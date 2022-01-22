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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={'Katiy'} id={dialogsData[1].id}/>
                <DialogItem name={'Artem'} id={dialogsData[2].id}/>
                <DialogItem name={'Kirill'} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={'How is your IT'} id={messageData[1].id}/>
                <Message message={'Yoooo'} id={messageData[2].id}/>
                <Message message={'Yoooo'} id={messageData[3].id}/>

            </div>

        </div>
    )

}

export default Dialogs;