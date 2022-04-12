import React from "react";

import s from './ProfileInfo.module.css';
import {PType} from "../../redux/profile-reudcer";
import {Preloader} from "../../Preloader/Preloader";
import prof from '../../../assets/images/prof.jpg';
type ProfileInfoType = {
    profile: null | PType
}


const ProfileInfo = (props: ProfileInfoType) => {
    /*if (!props.profile) {
        return <Preloader/>
    }*/
    return (
        <div>

            {props.profile ?  <img src={props.profile?.photos.large
                ? props.profile.photos.large
                : 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/> : <img src={prof}/> }



           {/* <div>
                <img src={prof}/>
            </div>
            <div className={s.discriptionBlock}>
                <img src={props.profile?.photos.large ? props.profile.photos.large : 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/>
                name : {props.profile?.fullName}

            </div>*/}
        </div>

    )

}
export default ProfileInfo;