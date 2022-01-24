import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

function MyPosts() {
    let postsData = [
        {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
        {id: 2, message: '"Hi, how are you?"', likesCount: 20}
    ]
    let myPostsItem =
        postsData.map(post => <Post message={postsData.message} likeCount={postsData.likesCount}/>)

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
                {myPostsItem}
            </div>
        </div>

    )
}

export default MyPosts;