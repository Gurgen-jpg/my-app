import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/reduxStore";


const Settings = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    if (!isAuth) {
        return <Navigate replace to='/loginPage' />
    }
    return (
        <div>Settings</div>
    )

}
export default Settings;