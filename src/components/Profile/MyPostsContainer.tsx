import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {
    addPostActionCreator,
    AddPostActionType,
    InitialStateType,
    onPostOnchangeActionCreator
} from "../redux/profile-reudcer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/reduxStore";




type MapStatePropsType = InitialStateType
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost:() => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(onPostOnchangeActionCreator(text))
        },
        addPost:() => dispatch(addPostActionCreator())
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



