
import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div className={s.posts}>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message={"Hi it's my first post"}/>
            <Post message={"Hi, how are you?"}/>
        </div>

    )
}
export default MyPosts;