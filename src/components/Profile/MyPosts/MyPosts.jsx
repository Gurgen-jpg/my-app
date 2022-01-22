import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    let postsData = [
        {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
        {id: 2, message: '"Hi, how are you?"', likesCount: 20}
    ]
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

                <Post message={postsData[0].message} likeCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likesCount}/>
            </div>
        </div>

    )
}

export default MyPosts;