import React from 'react';
import s from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";

export const Users = (props: UsersPagePropsType) => {
    /*const unFollowHandler = (userID: number) => {
        props.unFollow(userID)
    }
    const followHandler = (userID: number) => {
        props.unFollow(userID)
    }*/

    return (
        <div className={s.wrapper}>
            {props.users.map(el =>
                <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photo}/>
                        </div>
                        <div>
                            {
                                el.follow
                                    ? <button onClick={() => props.unFollow(el.id)}>unFollow</button>
                                    : <button onClick={() => props.follow(el.id)}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>

                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>

                </div>
            )}
        </div>
    );
};

