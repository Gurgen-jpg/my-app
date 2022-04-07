import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateType,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UType
} from "../redux/users-reducer";
import UsersClassComp from "./UsersClassComp";



type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UType>) => void
    getPage: (currentPage: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
}
export type UsersPagePropsType = InitialStateType & MapDispatchType


let mapStateToProps = (state: AppStateType):InitialStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUserCount: state.usersPage.totalUserCount

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
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
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComp) ;