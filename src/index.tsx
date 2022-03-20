import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./components/redux/reduxStore";
import {Provider} from "./StoreContext";

export const reRenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    );
}

reRenderEntireTree();
store.subscribe(reRenderEntireTree)

