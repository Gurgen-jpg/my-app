import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {postsType} from "../../../App";

type MyPostsPropsType = {
    posts: Array<postsType>
}

function MyPosts(props: MyPostsPropsType) {

    let myPostsItem =
        props.posts.map((p,id) => <Post key={id} message={p.message} likesCount={p.likesCount}/>)
    //добавляю ссылку на объект

    let newPostElement = React.createRef<HTMLTextAreaElement>()  /*//создали пустую ссылку*/

    //функция кнопки добавить пост
    const addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }



    return (

        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>   {/*// привязка ссылки*/}
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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