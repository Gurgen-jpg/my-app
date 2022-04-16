import React, {useEffect} from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {ProfileResponse, setUsersProfileAC} from "../redux/profile-reudcer";
import {MyPosts} from "./MyPosts/MyPostsFC";
import axios, {AxiosResponse} from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {useParams} from "react-router-dom";
import {getProfile} from "../Dal/api";


export const Profile = () => {

    const dispatch = useDispatch()
    const {userId} = useParams()

    useEffect(()=> {
        if (userId) {
            getProfile(userId)
                .then((data: ProfileResponse) => {
                    dispatch(setUsersProfileAC(data))
                })
        }
    }, [userId])
    let profile = useSelector<AppStateType, ProfileResponse>(state => state.profilePage.profile)
    return (
        <div className={s.content}>
                <ProfileInfo profile={profile}/>
                <MyPosts />
        </div>
    )
}
