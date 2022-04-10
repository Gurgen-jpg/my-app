import axios, {AxiosResponse} from 'axios';
import React from 'react';
import s from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";
import {UsersResponseType} from "../redux/users-reducer";

class UsersClassComp extends React.Component<UsersPagePropsType, UsersResponseType> {

    //  Конструктор можно не писать, НО пусть БУДЕТ))
    constructor(props: UsersPagePropsType) {
        super(props)
    }

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersResponseType>) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.getPage(p)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersResponseType>) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.wrapper}>
                <div>
                    {
            pages.map(p => {
                return <span className={this.props.currentPage === p ? s.pageNumber : ''}
                             onClick={()=> this.onPageChanged(p)}>{p}</span> })
                    }
                </div>
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
                    </span>

                    </div>
                )}
            </div>
        );
    }
}

export default UsersClassComp;
