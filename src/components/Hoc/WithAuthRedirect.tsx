import React, {ComponentType} from 'react';
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
export function WithAuthRedirect <T>(Component: ComponentType<T>){

    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate replace to='/loginPage'/>
        return <Component {...restProps as T}/>;
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

