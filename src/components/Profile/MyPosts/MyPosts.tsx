import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {postsType} from "../../../App";

type MyPostsPropsType = {
    posts: Array<postsType>
}

function MyPosts(props: MyPostsPropsType) {

    let myPostsItem =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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