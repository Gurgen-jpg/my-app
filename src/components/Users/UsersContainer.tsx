import React from 'react';
import {connect, Provider} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {
    changePageThunkC,
    followAC, followingInProgressAC, followThunkC, getUsersThunkC,
    InitialStateType,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC, unFollowThunkC, UsersResponseType,
    UType
} from "../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";



type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
/*    setUsers: (users: Array<UType>) => void
    getPage: (currentPage: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: (isFetching: boolean, userId: number) => void*/
    getUsersThunk: (currentPage: number, pageSize: number) => void
    changePageThunk: (p: number, pageSize: number) => void

}
export type UsersPagePropsType = InitialStateType & MapDispatchType


//Контейнер компонента КЛАССОВАЯ
class UsersContainer extends React.Component<UsersPagePropsType, UsersResponseType> {

    //  Конструктор можно не писать, НО пусть БУДЕТ))
    constructor(props: UsersPagePropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.changePageThunk(p, this.props.pageSize)
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
                following={this.props.following}
        /*        followingInProgress={this.props.followingInProgress}*/


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
        following: state.usersPage.following,
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {
        follow: followThunkC,
        unFollow: unFollowThunkC,
/*        setUsers: setUsersAC,
        getPage: setPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleIsFetching: toggleIsFetchingAC,
        followingInProgress: followingInProgressAC,*/
        getUsersThunk: getUsersThunkC,
        changePageThunk: changePageThunkC,

    }
)(UsersContainer));