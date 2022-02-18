import s from "./MyPosts.module.css";
import React, {ChangeEvent, MouseEvent, useState} from "react";
import Post from "./Post/Post";
import {postsType} from "../../../App";
import {stringify} from "querystring";

type MyPostsPropsType = {
    posts: Array<postsType>
    addPost: (postMessage:string) => void
}

function MyPosts(props: MyPostsPropsType) {
    const [text, setText] = useState<string>('')

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.currentTarget.value)

    }

    let myPostsItem =
        props.posts.map((p,id) => <Post key={id} message={p.message} likesCount={p.likesCount}/>)
    //добавляю ссылку на объект

    /*let newPostElement = React.createRef<HTMLTextAreaElement>()  /!*!//создали пустую ссылку*!/*/

    //функция кнопки добавить пост
    const onClickButtonHandler = () => {

        props.addPost(text)
        setText('');
    }



    return (

        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea value={text} onChange={onChangeHandler}></textarea>   {/*// привязка ссылки*/}
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