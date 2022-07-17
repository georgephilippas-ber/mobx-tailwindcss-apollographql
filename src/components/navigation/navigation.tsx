import "./navigation.css";

import {Logo} from "../../assets/assets";
import {MouseEventHandler, ReactNode, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

export function NavigationBar(props: { onClick?: MouseEventHandler<HTMLDivElement> })
{
    return (
        <div onClick={props.onClick}
             className="navbar bg-base-100 shadow-lg flex flex-row justify-end">
            <Logo width={"8em"} variant={"color"}/>
        </div>
    )
}

export function Feature(props: { children?: ReactNode })
{
    return (
        <div className={"w-full h-full relative"}>
            {props.children}
        </div>
    )
}

export function MainScreen(props: { children?: ReactNode })
{
    let [drawerDisplay, setDrawerDisplay] = useState<boolean>(false);

    return (
        <div className={"flex flex-col w-screen h-screen"}>
            <NavigationBar onClick={event => setDrawerDisplay(!drawerDisplay)}/>
            <Feature>
                <Drawer display={drawerDisplay}/>
                {/* Router?  */}
                <Routes>
                    <Route path={"/"} element={<div>GOTCHA</div>}/>
                    <Route path={"/products"} element={<div>set up products here</div>}/>
                </Routes>
            </Feature>
        </div>
    )
}

export function Drawer(props: { display?: boolean; onClick?: MouseEventHandler<HTMLDivElement> })
{

    let displayClass = props.display ? "w-60" : "w-0";

    return (
        <div onClick={props.onClick} className={["drawer-class h-full shadow-lg ", displayClass].join(" ")}>
            <div className={"w-full flex flex-col item-start"}>
                <Link to={"/"}>This is the link to MAIN</Link>
                <Link to={"/products"}>This is the link to here</Link>
            </div>
        </div>
    )
}
