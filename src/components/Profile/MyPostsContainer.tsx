import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, onPostOnchangeActionCreator} from "../redux/profile-reudcer";
import StoreContext, {ProviderType} from "../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                let posts = state.profilePage.posts

                const updateNewPostText = (text: string) => {
                    let action = onPostOnchangeActionCreator(text)
                    store.dispatch(action)
                }

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                return <MyPosts posts={posts}
                                newPostText={state.profilePage.newPostText}
                                updateNewPostText={updateNewPostText}
                                addPost={addPost}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

