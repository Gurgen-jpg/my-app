import s from "./MyPosts.module.css";
import React, {ChangeEvent, MouseEvent, useState} from "react";
import Post from "./Post/Post";
import {ActionsTypes, ProfilePageTypeProps,} from "../../redux/store";
import {addPostActionCreator, onPostOnchangeActionCreator} from './../../redux/profile-reudcer'

type MyPostsPropsType = ProfilePageTypeProps & {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
//перенес в State.ts
/*let addPostActionCreator = ():AddPostActionType => {
     return ({type: "ADD-POST"})
}

let onPostOnchangeActionCreator = (text: string):UpdateNewPostTextActonType => {
    return ({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    })
}*/
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