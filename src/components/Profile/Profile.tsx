import React, {useEffect} from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {getProfileThunk, ProfileResponse} from "../redux/profile-reudcer";
import {MyPosts} from "./MyPosts/MyPostsFC";

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {Navigate, useParams} from "react-router-dom";

export const Profile = () => {

    const dispatch = useDispatch()
    const {userId} = useParams()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    useEffect(()=> {
        if (userId)
            dispatch(getProfileThunk(userId))
    }, [userId])
    let profile = useSelector<AppStateType, ProfileResponse>(state => state.profilePage.profile)

    if (!isAuth) {
       return <Navigate replace to='/loginPage' />
    }

    return (

        <div className={s.content}>
                <ProfileInfo profile={profile}/>
                <MyPosts />
        </div>
    )
}



