import React from 'react';
import {useDispatch} from "react-redux";
import {logoutThunkC} from "../redux/authReducer/auth-reducer";

export const Exit = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={()=>dispatch(logoutThunkC())}>Quit</button>
    )
};

