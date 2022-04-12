import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator, onPostOnchangeActionCreator, PostType} from "../../redux/profile-reudcer";
import {AppStateType} from "../../redux/reduxStore";


export function MyPosts() {
    let posts = useSelector<AppStateType, PostType[]>(state => state.profilePage.posts)
    let newPosts = useSelector<AppStateType, string>(state => state.profilePage.newPostText)



    let myPostsItem =
        posts.map((p, id) =>
            <Post
                key={id}
                message={p.message}
                likesCount={p.likesCount}
            />)
    //добавляю ссылку на объект

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const dispatch = useDispatch()
    //функция кнопки добавить пост

    const addPost = () => {
        dispatch(addPostActionCreator())
    }
// Стейт получает каждое значение
    const onPostOnchange = () => {
        dispatch(onPostOnchangeActionCreator(newPostElement.current!.value))
    }


    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={newPosts}
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