import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store, {StoreType} from "./components/redux/state";


const reRenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree)

