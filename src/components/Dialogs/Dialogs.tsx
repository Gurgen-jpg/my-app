import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Gurgen'} id={'1'}/>
                <DialogItem name={'Katiy'} id={'2'}/>
                <DialogItem name={'Artem'} id={'3'}/>
                <DialogItem name={'Kirill'} id={'4'}/>
            </div>
            <div className={s.messages}>
                <Message message={'HI'}/>
                <Message message={'How is your IT'}/>
                <Message message={'Yoooo'}/>
            </div>

        </div>
    )

}

export default Dialogs;