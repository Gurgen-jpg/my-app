
import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div className={s.posts}>
            my posts
            <div>
                <textarea/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message={"Hi it's my first post"} likeCount={15}/>
            <Post message={"Hi, how are you?"} likeCount={20}/>
        </div>

    )
}
export default MyPosts;