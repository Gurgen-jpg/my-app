import axios, {AxiosResponse} from 'axios';
import React from 'react';
import s from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";
import {UsersResponseType} from "../redux/users-reducer";

export const Users = (props: UsersPagePropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: AxiosResponse<UsersResponseType>) => {
                    props.setUsers(response.data.items)
                })

        }
    }
    return (
        <div className={s.wrapper}>


            <button onClick={getUsers}>getUsers</button>
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

