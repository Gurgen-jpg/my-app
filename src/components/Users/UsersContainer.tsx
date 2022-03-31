import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UType} from "../redux/users-reducer";
import UsersClassComp from "./UsersClassComp";



type MapDispatchType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UType>) => void
}
export type UsersPagePropsType = InitialStateType & MapDispatchType


let mapStateToProps = (state: AppStateType):InitialStateType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComp) ;