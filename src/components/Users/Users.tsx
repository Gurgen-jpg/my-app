import React from 'react';
import s from "./users.module.css";
import {FilterType, InitialStateType, UType} from "../redux/users-reducer";
import {NavLink} from "react-router-dom";
import { UsersSearchForm } from './UsersSearchForm';
import {useSelector} from "react-redux";


export type UsersPageType = {
    users: Array<UType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged: (p: number) => void
    following: Array<number>
    onFilterChanged: (filter: FilterType) => void
}


export const Users = (props: UsersPageType) => {
    // PAGINATION------------------------------------------------------------------
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    if (props.currentPage > 10 && pagesCount - props.currentPage > 10) {
        for (let i = props.currentPage - 10; i <= props.currentPage + 10; i++)
            pages.push(i)
    } else if (0 < props.currentPage && props.currentPage <= 10) {
        for (let i = 1; i <= 20; i++)
            pages.push(i)
    } else if (pagesCount - props.currentPage <= 10) {
        for (let i = pagesCount - 20; i <= pagesCount; i++)
            pages.push(i)
    }
    //------------------------------------------------------------------------------


    return (


        <div className={s.wrapper}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.pageNumber : ''}
                                     onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>
            {props.users.map(el =>
                <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${el.id}`}>
                                <img
                                    src={el?.photos?.large || 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                el.followed
                                    ? <button disabled={props.following.some(id => id === el.id)} onClick={() => {
                                        props.unFollow(el.id)
                                    }}
                                    >unFollow </button>
                                    : <button disabled={props.following.some(id => id === el.id)} onClick={() => {
                                        props.follow(el.id)
                                    }}
                                    >follow</button>
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


