import React from 'react';
import store, {StoreType} from "./components/redux/state";
import {reRenderEntireTree} from "./components/render";


reRenderEntireTree();
store.subscribe(reRenderEntireTree)

