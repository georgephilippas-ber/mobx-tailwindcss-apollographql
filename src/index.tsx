import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// {/*<App />*/}
import reportWebVitals from './reportWebVitals';

import {LoginComponent, Protected, Unprotected} from "./components/authentication/login";
import {MainScreen} from "./components/navigation/navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LogoutLink} from "./components/navigation/links/logout-link";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let App = () =>
{
    return (
        <>
            <MainScreen drawerLinks={[LogoutLink]}>
                <Routes>
                    <Route path={"/"} element={<div>GOTCHA</div>}/>
                    <Route path={"/products"} element={<div>set up products here</div>}/>
                </Routes>
            </MainScreen>
        </>
    )
}

let WithAuthentication = () =>
{
    return (
        <>
            <Unprotected>
                <LoginComponent/>
            </Unprotected>
            <Protected>
                <App/>
            </Protected>
        </>
    )
}

const mode: "development" | "production" | string = "development";

root.render(
    <React.StrictMode>
        <BrowserRouter>
            {mode === "production" ? <WithAuthentication/> : <App/>}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
