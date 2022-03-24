import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";




const App = () => {
    /*const state = props.store.getState()*/

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route element={<Profile/>} path='/profile/*'/>
                    <Route element={<DialogsContainer/>} path='/dialogs/*'/>
                    <Route element={<Users/>} path='/users/'/>

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
