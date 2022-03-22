import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {MyPostsContainer} from "./MyPostsContainer";


const Profile = () => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer/>
        </div>
    )
}
export default Profile;