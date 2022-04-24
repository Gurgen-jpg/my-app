import React, {useEffect} from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {getProfileThunk, ProfileResponse, setUsersProfileAC} from "../redux/profile-reudcer";
import {MyPosts} from "./MyPosts/MyPostsFC";

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {useParams} from "react-router-dom";
import { profileAPI } from "../Dal/api";


export const Profile = () => {

    const dispatch = useDispatch()
    const {userId} = useParams()

    useEffect(()=> {
        if (userId)
            dispatch(getProfileThunk(userId))
    }, [userId])
    let profile = useSelector<AppStateType, ProfileResponse>(state => state.profilePage.profile)
    return (
        <div className={s.content}>
                <ProfileInfo profile={profile}/>
                <MyPosts />
        </div>
    )
}
