import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";

import {ActionsTypes, ProfilePageTypeProps} from "../redux/store";

type ProfilePropsType =  {
    profilePage: ProfilePageTypeProps
    dispatch: (action: ActionsTypes) => void
    /*addPost: () => void
    updateNewPostText: (newText:string) => void*/
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}
                />
        </div>
    )
}
export default Profile;