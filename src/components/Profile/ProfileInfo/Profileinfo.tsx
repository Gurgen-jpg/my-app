import React from "react";
import {PType} from "../../redux/profile-reudcer";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: null | PType
}


const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            {/*{
                props.profile
                ? <div className={s.discriptionBlock}><img src={props.profile?.photos.large
                    ? props.profile.photos.large
                    : 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/></div>
                : <div className={s.discriptionBlock}><img src={prof}/></div>
            }*/}
            <img src={props.profile?.photos.large
                ? props.profile.photos.large
                : 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/>
            <ProfileStatus/>
            <ul>
                <li>name: {props.profile?.fullName}</li>
                <li>waiting for a jobOffer: {props.profile?.lookingForAJob ? 'Wait offer' : 'Have a job'}</li>
                <li>UserID: {props.profile?.userId}</li>
            </ul>

        </div>

    )

}
export default ProfileInfo;