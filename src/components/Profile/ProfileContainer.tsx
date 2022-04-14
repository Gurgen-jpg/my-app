import React from "react";


import {InitialStateType, ProfileResponse, PType, setUsersProfileAC} from "../redux/profile-reudcer";
import s from "./Profile.module.css";
import axios, {AxiosResponse} from "axios";
import { connect } from "react-redux";
import {AppStateType} from "../redux/reduxStore";
export type ProfilePagePropsType = InitialStateType & MapDispatchType
type MapDispatchType = {
    setUsersProfile: (profile: PType) => void
}

class ProfileContainer extends React.Component<ProfilePagePropsType, ProfileResponse> {
    componentDidMount() {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((response: AxiosResponse<ProfileResponse>) => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {

        return (
            <div className={s.content}>

            </div>
        )
    }

}
let mapStateToProps = (state: AppStateType):InitialStateType => {
    return {
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}


// @ts-ignore
export default connect(mapStateToProps, {
    setUsersProfile: setUsersProfileAC
    // @ts-ignore
})(ProfileContainer)

