import React from 'react';
import {connect} from "react-redux";

import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/reduxStore";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const WithAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: MapStatePropsType) => {
        if (!props.isAuth) return <Navigate replace to='/loginPage'/>
        return <Component value ={1000} {...props}/>;
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

