import React, {useEffect} from 'react';
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
import {LoginPage} from "./components/Login/LoginPage";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {useDispatch} from "react-redux";
import {authorizeThunkC} from "./components/redux/app-reducer";
import {useAppSelector} from "./components/redux/reduxStore";
import {Preloader} from "./components/Preloader/Preloader";
import { Movies } from './components/Movies/Movies';

const App = () => {
    const dispatch = useDispatch();
    const isInitial = useAppSelector<boolean>(state => state.app.isAuth)

    useEffect(() => {
        dispatch(authorizeThunkC())
    }, [])
    if (!isInitial) return <Preloader/>

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<ProfileContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>} />
                    <Route element={<DialogsContainer/>} path='/dialogs/*'/>
                    <Route element={<UsersContainer/>} path='/users/'/>
                    <Route element={<Music/>} path='/music/*'/>
                    <Route element={<Movies/>} path='/movies/'/>
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
