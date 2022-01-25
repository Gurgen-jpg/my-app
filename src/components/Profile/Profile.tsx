import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {postsType} from "../../App";

type ProfilePropsType = {
    state: {
        posts: Array<postsType>
    }
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts}/>
        </div>
    )
}
export default Profile;