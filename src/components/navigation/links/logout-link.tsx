import {LogOut} from "@styled-icons/boxicons-regular";
import React from "react";

import {globalAuthentication} from "../../../core/authentication";

import {DrawerLink} from "../../generic/navigation/drawer-link";

export function LogoutLink()
{
    return <DrawerLink label={"Exit"} onClick={() => globalAuthentication.logout(true)} Icon={LogOut}/>
}

