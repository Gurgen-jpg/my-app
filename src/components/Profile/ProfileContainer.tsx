import React from "react";


import {InitialStateType, ProfileResponse, PType, setUsersProfileAC} from "../redux/profile-reudcer";
import s from "./Profile.module.css";
import Profile from "./Profile";
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
                <Profile {...this.props} profile={this.props.profile}/>
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUsersProfile: setUsersProfileAC
})(WithUrlDataContainerComponent)

