import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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


ReactDOM.render(<App posts={postsData} dialog={dialogsData} message={messageData}/>,
    document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
