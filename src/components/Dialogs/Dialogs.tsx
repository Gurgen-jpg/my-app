import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Gurgen </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Kirill</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Katya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your IT?</div>
                <div className={s.dialog}>Yooooo</div>
            </div>

        </div>
    )

}

export default Dialogs;