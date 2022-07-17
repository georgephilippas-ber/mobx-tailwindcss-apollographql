import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// {/*<App />*/}
import reportWebVitals from './reportWebVitals';

import {LoginComponent, Protected, Unprotected} from "./components/authentication/login";
import {Drawer, MainScreen} from "./components/navigation/navigation";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let Main = () =>
{
    return (
        <>
            <MainScreen/>
        </>
    )
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<Unprotected>*/}
            {/*    <LoginComponent/>*/}
            {/*</Unprotected>*/}
            {/*<Protected>*/}
            {/*    <Main/>*/}
            {/*</Protected>*/}
            <Main/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
