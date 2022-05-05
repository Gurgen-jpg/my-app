import React from "react";
import {PType} from "../../redux/profile-reudcer";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: null | PType
    status: string
    changeStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoType) => {
    console.log(props.status)
    console.log(props.profile)
    return (
        <div>

            <img src={props.profile?.photos.large
                ? props.profile.photos.large
                : 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/>
            <ProfileStatus status={props.status} changeStatus={props.changeStatus}/>
            <ul>
                <li>name: {props.profile?.fullName}</li>
                <li>waiting for a jobOffer: {props.profile?.lookingForAJob ? 'Wait offer' : 'Have a job'}</li>
                <li>UserID: {props.profile?.userId}</li>
            </ul>

        </div>

    )

}
export default ProfileInfo;