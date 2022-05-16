import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {
    changePageThunkC, FilterType,
    followThunkC, getUsersThunkC,
    InitialStateType,
    unFollowThunkC, UsersResponseType,
} from "../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getUserCurrentPage, getUserFilter, getUserFollowing,
    getUserIsFetching,
    getUserPage,
    getUserPageSize,
    getUserTotalUserCount
} from "../redux/Usesr-selectors";

type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    getUsersThunk: (currentPage: number, pageSize: number, search: string) => void
    changePageThunk: (p: number, pageSize: number, search: string) => void
}
export type UsersPagePropsType = InitialStateType & MapDispatchType

//Контейнер компонента КЛАССОВАЯ
class UsersContainer extends React.Component<UsersPagePropsType, UsersResponseType> {
    //  Конструктор можно не писать, НО пусть БУДЕТ))
    constructor(props: UsersPagePropsType) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, '')
    }

    onPageChanged = (p: number) => {
        const {pageSize, filter} = this.props
        this.props.changePageThunk(p, pageSize, filter.search)
    }
    onFilterChanged = (filter: FilterType) => {
        const {pageSize, currentPage} = this.props
        this.props.getUsersThunk(currentPage, pageSize, filter.search)
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
                onFilterChanged={this.onFilterChanged}
            />
        </>
    }
}

//МАП СТЕЙТ и МАП ДИСПАТЧ
let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        users: getUserPage(state),
        pageSize: getUserPageSize(state),
        currentPage: getUserCurrentPage(state),
        totalUserCount: getUserTotalUserCount(state),
        isFetching: getUserIsFetching(state),
        following: getUserFollowing(state),
        filter: getUserFilter(state),
    }
}
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
            follow: followThunkC,
            unFollow: unFollowThunkC,
            getUsersThunk: getUsersThunkC,
            changePageThunk: changePageThunkC,
        }
    ))(UsersContainer);