import React from 'react';
import s from "./users.module.css";
import {UType} from "../redux/users-reducer";


export type UsersPageType = {
    users: Array<UType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged: (p: number) => void
}


export const Users = (props: UsersPageType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.wrapper}>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.pageNumber : ''}
                                     onClick={()=> props.onPageChanged(p)}>{p}</span> })
                }
            </div>
            {props.users.map(el =>
                <div key={el.id}>
                    <span>
                        <div>
                            <img src={el?.photos?.large || 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/>
                        </div>
                        <div>
                            {
                                el.followed
                                    ? <button onClick={() => props.unFollow(el.id)}>unFollow</button>
                                    : <button onClick={() => props.follow(el.id)}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                    </span>

                </div>
            )}
        </div>
    );
};
