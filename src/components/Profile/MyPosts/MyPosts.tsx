import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<any>
}

function MyPosts(props: MyPostsPropsType) {

    let myPostsItem =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

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