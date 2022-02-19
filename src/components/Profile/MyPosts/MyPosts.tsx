import s from "./MyPosts.module.css";
import React, {ChangeEvent, MouseEvent, useState} from "react";
import Post from "./Post/Post";
import {postsType} from "../../../App";


type MyPostsPropsType = {
    posts: Array<postsType>
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    let myPostsItem =
        props.posts.map((p, id) => <Post key={id} message={p.message} likesCount={p.likesCount}/>)
    //добавляю ссылку на объект

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    //функция кнопки добавить пост
    const onClickButtonHandler = () => {
        let text = newPostElement.current!.value
        props.addPost(text)
        newPostElement.current!.value = '';
    }


    return (

        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea> {/*// привязка ссылки*/}
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>Add post</button>
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