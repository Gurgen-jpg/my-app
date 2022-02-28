import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {postsType} from "../../App";
import {updateNewPostText} from "../redux/state";

type ProfilePropsType = {
    profilePage: {
        posts: Array<postsType>,
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText:string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         addPost={props.addPost}
                         newPostText={props.profilePage.newPostText}
                         updateNewPostText={props.updateNewPostText}

                />
        </div>
    )
}
export default Profile;