import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsTypeProps} from "../../redux/state";



const DialogItem = (props: DialogsTypeProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;