import s from "./Post.module.css";
import React from "react";




type PostPropsType = {
    message: string,
    likesCount: number;
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src={'https://i.pinimg.com/564x/54/6c/ea/546cea9afb37d4caccc0ba7da767fefb.jpg'}
                 alt={'avatarka'}
            />
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>

    )
}

export default Post;