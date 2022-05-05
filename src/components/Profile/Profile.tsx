import React, {useEffect} from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {getProfileThunk, getStatusThunk, ProfileResponse, PType, updateStatusThunk} from "../redux/profile-reudcer";
import {MyPosts} from "./MyPosts/MyPostsFC";

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {Navigate, useParams} from "react-router-dom";

export const Profile = () => {

    const dispatch = useDispatch()
    const {userId} = useParams()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const myId = useSelector<AppStateType, number | null>(state => state.auth?.data?.id)
    let profile = useSelector<AppStateType, ProfileResponse>(state => state.profilePage.profile)


    useEffect(() => {
        let id = userId;
        if (!id) {
            id = myId?.toString() || '2'
        }
        dispatch(getProfileThunk(id))
        dispatch(getStatusThunk(id))
    }, [])


    const changeStatus = (newStatus: string) => {
      dispatch(updateStatusThunk(newStatus))
    }

    let status = useSelector<AppStateType, string>(state => state.profilePage.status)

    if (!isAuth) {
        return <Navigate replace to='/loginPage'/>
    }

    return (

        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} changeStatus={changeStatus}/>
            <MyPosts/>
        </div>
    )
}



