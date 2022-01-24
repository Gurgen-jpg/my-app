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

let postsData = [
    {id: 1, message: 'Hi, it`s my first post', likesCount: 15},
    {id: 2, message: '"Hi, how are you?"', likesCount: 20}
]
let dialogsData = [
    {id: 1, name: 'Gurgen'},
    {id: 2, name: 'Katiy'},
    {id: 3, name: 'Artem'},
    {id: 4, name: 'Kirill'}
]
let messageData = [
    {id: 1, message: 'How is your IT'},
    {id: 2, message: 'Yooo'},
    {id: 3, message: 'Hello man'},
    {id: 4, message: 'Hey!'}
]

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route element={<Profile posts={postsData}/>} path='/profile'/>
                        <Route element={<Dialogs dialog={dialogsData} message={messageData}/>} path='/dialogs/*'/>
                        <Route element={<Music/>} path='/music'/>
                        <Route element={<News/>} path='/news'/>
                        <Route element={<Settings/>} path='/settings'/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
