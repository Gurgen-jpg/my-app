import React from 'react';
/*import store from "./components/redux/store";*/
/*import {reRenderEntireTree} from "./components/render";*/
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./components/redux/reduxStore";

export const reRenderEntireTree = () => {
    ReactDOM.render(

        <App store={store}/* dispatch={store.dispatch}*//>
        ,
        document.getElementById('root')
    );
}

reRenderEntireTree();
store.subscribe(reRenderEntireTree)

