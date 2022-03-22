import React, {ReactComponentElement} from "react";
import {StoreType} from "./components/redux/reduxStore";



/*
const StoreContext = React.createContext({} as Store<CombinedState<{
    profilePage: any,
    dialogsPage: any
}>, any>)
export type ProviderType = {
    store: Store<CombinedState<{
        profilePage: any,
        dialogsPage: any
    }>, any>
    children: React.ReactNode
}
*/
let StoreContext = React.createContext({} as StoreType)
export type ProviderType = {
    store:StoreType,
    children?:React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext
