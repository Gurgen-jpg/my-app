import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {postsType} from "../../App";

type ProfilePropsType = {
    state: {
        posts: Array<postsType>
    }
    addPost: (postMessage:string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;