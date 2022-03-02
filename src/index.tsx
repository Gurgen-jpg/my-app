import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./components/redux/state";


const reRenderEntireTree = (state:RootStateType) => {
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

