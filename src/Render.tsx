import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppPropsType} from "./App";
import state, {addPost} from "./components/redux/state";
import React from "react";

export const letRerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}