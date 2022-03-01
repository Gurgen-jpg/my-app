import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppPropsType} from "./App";
import state, {addPost, StateType, subscribe, updateNewPostText} from "./components/redux/state";


const reRenderEntireTree = (state:any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderEntireTree(state);
subscribe(reRenderEntireTree)

