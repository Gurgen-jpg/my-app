import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {InitialStateType} from "../redux/profile-reudcer";


const Profile = (props: InitialStateType) => {
    return (
        <div className={s.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
        </div>
    )
}
export default Profile;