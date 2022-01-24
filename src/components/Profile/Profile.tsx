import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
type ProfilePropsType = {
    posts: Array<any>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile;