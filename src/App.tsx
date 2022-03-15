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
import {StoreType} from "./components/redux/state";


export type AppPropsType = {
    store: StoreType

}
const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route element={<Profile profilePage={state.profilePage}
                                             dispatch={props.store.dispatch.bind(props.store)}
                                             /*updateNewPostText={props.store.dispatch.bind(props.store)}*/

                    />}
                           path='/profile/*'
                    />
                    <Route element={<Dialogs messagePage={state.messagePage}/>} path='/dialogs/*'/>
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
