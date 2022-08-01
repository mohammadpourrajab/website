import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {BrowserRouter} from "react-router-dom";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer Token';

axios.interceptors.request.use((request) => {
    console.log(`A ${request.method} request sent to ${request.url}`);
    return request;
}, error => {
    console.log(error)
    return Promise.reject(error)
});

axios.interceptors.response.use(
    (response) => {
        // console.log(response);
        return response;
    }, error => {
        console.log(error)
        return Promise.reject(error)
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
