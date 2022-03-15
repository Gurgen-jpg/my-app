import {StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
import store from "./redux/state";

export const reRenderEntireTree = () => {
    ReactDOM.render(

            <App store={store}/* dispatch={store.dispatch}*//>
,
        document.getElementById('root')
    );
}