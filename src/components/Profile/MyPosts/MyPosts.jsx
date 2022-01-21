import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>

                <Post message={"Hi it's my first post"} likeCount={15}/>
                <Post message={"Hi, how are you?"} likeCount={20}/>
            </div>
        </div>

    )
}

export default MyPosts;