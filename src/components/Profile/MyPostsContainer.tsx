import React from 'react';
import {StoreType} from "../../App";
import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, onPostOnchangeActionCreator} from "../redux/profile-reudcer";


export const MyPostsContainer = (props: StoreType) => {
    let state = props.store.getState()
    const updateNewPostText = (text: string) => {
        let action = onPostOnchangeActionCreator(text)
        props.store.dispatch(action)
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let posts = state.profilePage.posts

    return (
        <MyPosts posts={posts}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}
        />
    );
};

