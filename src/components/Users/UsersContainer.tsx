import React from 'react';
import {connect, Provider} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateType,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC, UsersResponseType,
    UType
} from "../redux/users-reducer";
import axios, {AxiosResponse} from "axios";
import {Users} from "./Users";
import Rocket from './../../assets/images/Rocket.gif'
import {Preloader} from "../Preloader/Preloader";


type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UType>) => void
    getPage: (currentPage: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPagePropsType = InitialStateType & MapDispatchType


//Контейнер компонента КЛАССОВАЯ
class UsersContainer extends React.Component<UsersPagePropsType, UsersResponseType> {

    //  Конструктор можно не писать, НО пусть БУДЕТ))
    constructor(props: UsersPagePropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersResponseType>) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.getPage(p)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersResponseType>) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}

            />
        </>

    }
}

//МАП СТЕЙТ и МАП ДИСПАТЧ
let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount,
        isFetching: state.usersPage.isFetching,

    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UType>) => {
            dispatch(setUsersAC(users))
        },
        getPage: (currentPage: number) => {
            dispatch((setPageAC(currentPage)))
        },
        setTotalUsersCount: (totalUserCount: number) => {
            dispatch(setTotalUsersCountAC(totalUserCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        getPage: setPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleIsFetching: toggleIsFetchingAC
    }
)(UsersContainer);