import "./navigation.css";

import {Logo} from "../../assets/assets";

import {makeAutoObservable} from "mobx";
import {useState} from "react";

class Navigation
{
    constructor()
    {
        makeAutoObservable(this);
    }
}

export function NavigationBar()
{
    let [drawerDisplay, setDrawerDisplay] = useState<boolean>(false);

    return (
        <div className={"flex flex-col w-screen h-screen"}>
            <div onClick={event => setDrawerDisplay(!drawerDisplay)}
                 className="navbar bg-base-100 shadow-lg flex flex-row justify-end">
                <button onClick={event => setDrawerDisplay(!drawerDisplay)}>
                    <Logo width={"8em"} variant={"color"}/></button>
            </div>
            <div className={"w-full h-full border-2 relative"}>
                <MainDrawer display={drawerDisplay}/>
            </div>
        </div>
    )
}

export function MainDrawer(props: { display?: boolean })
{

    let displayClass = props.display ? "w-60" : "w-0";

    return (
        <div className={["drawer-class h-full", displayClass].join(" ")}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi corporis, earum est impedit
            inventore ipsa iusto magnam maxime nemo nesciunt nihil placeat quisquam saepe vitae voluptatem. Iusto,
            mollitia.
        </div>
    )
}
