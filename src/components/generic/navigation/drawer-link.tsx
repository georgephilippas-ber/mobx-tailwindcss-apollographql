import React, {MouseEventHandler} from "react";
import {Link} from "react-router-dom";

export function DrawerLink({
                               Icon,
                               onClick, label, to
                           }: { label: string; to?: string; onClick?: MouseEventHandler<HTMLDivElement>; Icon?: React.FC<{ className?: string }> })
{
    let Component = () => (
        <div onClick={onClick}
             className={"w-full h-9 flex flex-row justify-start items-center space-x-4 select-none"}>
            {Icon ? <Icon className={"w-6"}/> : null}
            <div>
                {label}
            </div>
        </div>);

    return to ? <Link to={to}><Component/></Link> : <Component/>
}
