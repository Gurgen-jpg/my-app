import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {MyPostsContainer} from "./MyPostsContainer";
import {StoreType} from "../../App";

const Profile = (props: StoreType) => {
    return (
        <div className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile;