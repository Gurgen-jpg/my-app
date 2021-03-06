import React, {useEffect} from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, setAuthThunkC} from "../redux/authReducer/auth-reducer";
import {AppStateType} from "../redux/reduxStore";

const tempPhoto = "https://cdn.dribbble.com/users/10882/screenshots/15172621/media/" +
    "cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300"
const Header = () => {
    let dispatch = useDispatch();
    let userData = useSelector<AppStateType, InitialStateType>(state => state.auth)

    return (<header className={s.header}>
            <img
                src={tempPhoto}/>

            <div className={s.loginBlock}>
                {
                    userData.data !== null

                        ? <span>{userData.data.login}</span>
                        : <NavLink to='/login' className={s.loginLink}>login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header