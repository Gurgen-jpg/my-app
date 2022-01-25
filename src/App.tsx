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



type postsType = {
    id: number,
    message: string,
    likesCount: number
}
type dialogsType = {
    id: number,
    name: string
}
type messageType = {
    id: number,
    message: string
}

type stateType = {

    posts: Array<postsType>,
    message: Array<messageType>,
    dialogs: Array<dialogsType>
}
type AppPropsType = {
    state: stateType
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route element={<Profile posts={props.state.posts}/>} path='/profile/*'/>
                        <Route element={<Dialogs dialog={props.state.dialogs} message={props.state.message}/>} path='/dialogs/*'/>
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
