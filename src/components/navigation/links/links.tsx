//https://styled-icons.dev

import {LogOut} from "@styled-icons/boxicons-regular";
import {UserAccount} from "@styled-icons/boxicons-solid";
import {Home} from "@styled-icons/fa-solid";

import {globalAuthentication} from "../../../core/authentication";

import {DrawerLink} from "../../generic/navigation/drawer-link";

export function HomeLink()
{
    return <DrawerLink label={"Home"} to={"/"} Icon={Home}/>
}

export function ProfileLink()
{
    return <DrawerLink label={"Profile"} to={"/profile"} Icon={UserAccount}/>
}

export function LogOutLink()
{
    return <DrawerLink label={"Exit"} onClick={() => globalAuthentication.logout(true)} Icon={LogOut}/>
}
