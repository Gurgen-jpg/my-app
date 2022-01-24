import s from "./Post.module.css";
import React from "react";




type PostPropsType = {
    message: string,
    likeCount: number;
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src={'http://archilab.online/images/1/123.jpg'} alt={'avatarka'}/>
            {props.message}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post;