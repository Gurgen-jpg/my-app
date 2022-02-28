import s from "./MyPosts.module.css";
import React, {ChangeEvent, MouseEvent, useState} from "react";
import Post from "./Post/Post";
import {postsType} from "../../../App";


type MyPostsPropsType = {
    posts: Array<postsType>
    addPost: () => void
    updateNewPostText: (newText:string) => void
    newPostText: string
}

function MyPosts(props: MyPostsPropsType) {

    let myPostsItem =
        props.posts.map((p, id) =>
            <Post
                key={id}
                message={p.message}
                likesCount={p.likesCount}
            />)
    //добавляю ссылку на объект

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    //функция кнопки добавить пост
    const addPost = () => {
       // let text = newPostElement.current!.value
        props.addPost()


    }
// Стейт получает каждое значение
    const onPostOnchange = () => {
        let text = newPostElement.current!.value;
        props.updateNewPostText(text)
    }


    return (

        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostOnchange}
                    /> {/*// привязка ссылки*/}
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