import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// {/*<App />*/}
import reportWebVitals from './reportWebVitals';

import {LoginComponent, Protected, Unprotected} from "./components/authentication/login";
import {MainDrawer, NavigationBar} from "./components/navigation/navigation";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let Main = () =>
{
    return (
        <>
            <NavigationBar/>
        </>
    )
}

root.render(
    <React.StrictMode>
        {/*<Unprotected>*/}
        {/*    <LoginComponent/>*/}
        {/*</Unprotected>*/}
        {/*<Protected>*/}
        {/*    <Main/>*/}
        {/*</Protected>*/}
        <Main/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
