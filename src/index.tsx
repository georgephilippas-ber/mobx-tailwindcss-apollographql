import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// {/*<App />*/}
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./core/apollo-client";

import {LoginComponent, Protected, Unprotected} from "./components/authentication/login";
import {MainScreen} from "./components/navigation/navigation";

import {HomeLink, LogOutLink, ProfileLink} from "./components/navigation/links/links";
import {Default} from "./features/default/default";
import {Profile} from "./features/profile/profile";
import {Backend} from "./configuration/configuration";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const App = (props: any) =>
{
    return (
        <ApolloProvider client={apolloClient}>
            <MainScreen drawerLinks={[HomeLink, ProfileLink, LogOutLink]}>
                <Routes>
                    <Route path={"/"} element={<Default/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
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

const mode: "development" | "production" | string = "production";

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
