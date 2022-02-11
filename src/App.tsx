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



export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export type dialogsType = {
    id: number,
    name: string
}
export type messageType = {
    id: number,
    message: string
}

export type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<postsType>
        },
        messagePage: {
            dialogs: Array<dialogsType>,
            message: Array<messageType>
        }
    }
}
const App = (props: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route element={<Profile state={props.state.profilePage}/>} path='/profile/*'/>
                        <Route element={<Dialogs state={props.state.messagePage}/>} path='/dialogs/*'/>
                        <Route element={<Music/>} path='/music/*'/>
                        <Route element={<News/>} path='/news/*'/>
                        <Route element={<Settings/>} path='/settings/*'/>
                    </Routes>
                </div>
            </div>
    )
}


export default App;
