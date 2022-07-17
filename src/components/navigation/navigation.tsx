import {Logo} from "../../assets/assets";

export function NavBar()
{
    return (
        <div className="navbar bg-base-100 shadow-lg flex flex-row justify-end">
            <button onClick={event => console.log("click")}>
                <Logo width={"8em"} variant={"color"}/></button>
        </div>
    )
}
