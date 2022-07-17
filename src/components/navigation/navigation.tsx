import "./navigation.css";

import {Logo} from "../../assets/assets";
import React, {MouseEventHandler, ReactNode, useState} from "react";

export function NavigationBar(props: { onClick?: MouseEventHandler<HTMLDivElement> })
{
    return (
        <div onClick={props.onClick}
             className="navbar bg-base-100 shadow-lg flex flex-row justify-end">
            <Logo width={"8em"} variant={"color"}/>
        </div>
    )
}

export function Drawer(props: { display?: boolean; onClick?: MouseEventHandler<HTMLDivElement>; drawerLinks: React.FC<any>[] })
{
    return (
        <div onClick={props.onClick}
             className={["drawer-class h-full shadow-lg ", (props.display ? "w-60" : "w-0")].join(" ")}>
            <div className={"w-full flex flex-col item-start"}>
                {props.drawerLinks.map((Component, index) => <Component key={index}/>)}
            </div>
        </div>
    )
}

function FeatureScreen(props: { children?: ReactNode; onClick?: MouseEventHandler<HTMLDivElement> })
{
    return (
        <div onClick={props.onClick} className={"w-full h-full relative"}>
            {props.children}
        </div>
    )
}

export function MainScreen(props: { children?: ReactNode; drawerLinks: React.FC[] })
{
    let [drawerDisplay, setDrawerDisplay] = useState<boolean>(false);

    return (
        <div className={"flex flex-col w-screen h-screen"}>
            <NavigationBar onClick={event => setDrawerDisplay(!drawerDisplay)}/>
            <FeatureScreen>
                <Drawer drawerLinks={props.drawerLinks} display={drawerDisplay}
                        onClick={() => setDrawerDisplay(!drawerDisplay)}/>
                {props.children}
            </FeatureScreen>
        </div>
    )
}
