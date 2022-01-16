import s from "./Post.module.css";
import React from "react";

function Post(props) {
    return (
        <div className={s.item}>
            <img src={'http://archilab.online/images/1/123.jpg'}/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post;