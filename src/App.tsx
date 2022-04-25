import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Profile} from "./components/Profile/Profile";
import {LoginPage} from "./components/Login/LoginPage";




const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/profile/:userId' element={<Profile/>} />


                    <Route element={<DialogsContainer/>} path='/dialogs/*'/>
                    <Route element={<UsersContainer/>} path='/users/'/>

                    <Route element={<Music/>} path='/music/*'/>
                    <Route element={<News/>} path='/news/*'/>
                    <Route element={<Settings/>} path='/settings/*'/>
                    <Route element={<LoginPage/>} path='/loginPage'/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}


export default App;
