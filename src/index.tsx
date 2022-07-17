import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// {/*<App />*/}
import reportWebVitals from './reportWebVitals';

import {LoginComponent, Protected, Unprotected} from "./components/authentication/login";
import {MainScreen} from "./components/navigation/navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Links, ProfileLink} from "./components/navigation/links/links";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./core/apollo-client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const App = (props: any) =>
{
    return (
        <ApolloProvider client={apolloClient}>
            <MainScreen drawerLinks={[ProfileLink, Links]}>
                <Routes>
                    <Route path={"/"} element={<div>GOTCHA</div>}/>
                    <Route path={"/profile"} element={<div>Account Settings go here</div>}/>
                    <Route path={"/products"} element={<div>set up products here</div>}/>
                </Routes>
            </MainScreen>
        </ApolloProvider>
    )
}

let WithAuthentication = (props: any) =>
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
