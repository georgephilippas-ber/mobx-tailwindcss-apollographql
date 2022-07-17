//https://styled-icons.dev

import {LogOut} from "@styled-icons/boxicons-regular";
import {UserAccount} from "@styled-icons/boxicons-solid";

import {globalAuthentication} from "../../../core/authentication";

import {DrawerLink} from "../../generic/navigation/drawer-link";

export function Links()
{
    return <DrawerLink label={"Exit"} onClick={() => globalAuthentication.logout(true)} Icon={LogOut}/>
}

export function ProfileLink()
{
    return <DrawerLink label={"Profile"} to={"/profile"} Icon={UserAccount}/>
}
