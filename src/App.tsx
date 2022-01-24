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

type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}
type dialogsDataType = {
    id: number,
    name: string
}
type messageDataType = {
    id: number,
    message: string
}
type AppPropsType = {
    posts:Array<postsDataType>,
    message:Array<messageDataType>,
    dialog:Array<dialogsDataType>
}

const App = (props: any) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route element={<Profile posts={props.posts}/>} path='/profile/*'/>
                        <Route element={<Dialogs dialog={props.dialog} message={props.message}/>} path='/dialogs/*'/>
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
