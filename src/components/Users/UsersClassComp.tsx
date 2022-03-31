import axios, {AxiosResponse} from 'axios';
import React from 'react';
import s from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";
import {UsersResponseType} from "../redux/users-reducer";

class UsersClassComp extends React.Component<UsersPagePropsType, UsersResponseType>{

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: AxiosResponse<UsersResponseType>) => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div className={s.wrapper}>
                <button onClick={this.getUsers}>getUsers</button>
                {this.props.users.map(el =>
                    <div key={el.id}>
                    <span>
                        <div>
                            <img src={el?.photos?.large || 'https://upload.wikimedia.org/wikipedia/ru/4/4c/Neo2.jpg'}/>
                        </div>
                        <div>
                            {
                                el.followed
                                    ? <button onClick={() => this.props.unFollow(el.id)}>unFollow</button>
                                    : <button onClick={() => this.props.follow(el.id)}>follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                            {/*
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>*/}
                    </span>

                    </div>
                )}
            </div>
        );
    }
}
export default UsersClassComp;
