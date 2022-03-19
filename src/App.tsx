import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ReduxStoreType} from "./components/redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export type StoreType = {

    store: ReduxStoreType
}
const App = (props: StoreType) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route element={<Profile store={props.store}/>} path='/profile/*'/>
                    <Route element={<DialogsContainer store={props.store}/>} path='/dialogs/*'/>

                    <Route element={<Music/>} path='/music/*'/>
                    <Route element={<News/>} path='/news/*'/>
                    <Route element={<Settings/>} path='/settings/*'/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}


export default App;
