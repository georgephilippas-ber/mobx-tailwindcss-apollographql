import {Logo} from "../../assets/assets";
import {useEffect, useState} from "react";

function Alert({
                   alert_type = "alert-info",
                   text, timeout, initialShow
               }: { initialShow: boolean, alert_type?: "alert-success" | "alert-info" | "alert-error" | "alert-warning"; text?: string, timeout?: number })
{

    useEffect(() =>
    {
        if (initialShow && timeout)
        {
            setTimeout(() => setDisplay("none"), timeout);
        }
    }, [initialShow]);

    let [display, setDisplay] = useState<"none" | "inherit">("inherit");

    if (initialShow)
    {
        return (
            <div style={{display, position: "fixed", bottom: "1em", left: "1em"}}
                 className={`max-w-sm lg:max-w-lg alert ${alert_type} shadow-lg`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-current flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{text}</span>
                </div>
            </div>
        )
    } else
        return null;
}

function MethodPassword(props: { onChange?: (credentials: string[]) => void })
{
    let [credentials, setCredentials] = useState<string[]>(["", ""]);

    return (
        <div className={"flex flex-col items-center space-y-4 w-full"}>
            <input onChange={event =>
            {
                let updatedCredentials: string[] = [event.target.value, credentials[1]];

                setCredentials(updatedCredentials);

                props.onChange?.(updatedCredentials);
            }} type="text"
                   placeholder="username | e-mail" className="input input-bordered w-full max-w-md"/>

            <input onChange={event =>
            {
                let updatedCredentials: string[] = [credentials[0], event.target.value];

                setCredentials(updatedCredentials);

                props.onChange?.(updatedCredentials);
            }} type="password"
                   placeholder="password" className="input input-bordered w-full max-w-md"/>
        </div>
    )
}

function MethodPasskey(props: { onChange?: (credentials: string[]) => void })
{
    let [, setCredentials] = useState<string[]>([""]);

    return (
        <div className={"flex flex-col items-center space-y-4 w-full"}>
            <input onChange={event =>
            {
                let updatedCredentials: string[] = [event.target.value];

                setCredentials(updatedCredentials);

                props.onChange?.(updatedCredentials);
            }} type="password"
                   placeholder="passkey" className="input input-bordered w-full max-w-md"/>
        </div>
    )
}

export function Login(props: any)
{
    let [credentials, setCredentials] = useState<string []>(["", ""]);

    let [methodPasskey, setMethodPasskey] = useState<boolean>(true);

    let validateCredentials = (credentials: string[]) =>
    {
        console.log("validating", credentials);
    }

    let requestLogin = (credentials: string[]) =>
    {
        console.log("login");
    }

    return (
        <>
            <div className={"max-w-screen-md mx-auto"}>
                <div className={"flex flex-col items-center space-y-3 p-3"}>
                    <Logo className={"mb-3.5"} variant={"white"}/>

                    {!methodPasskey ?
                        <MethodPassword onChange={credentials1 => setCredentials(credentials1)}/> :
                        <MethodPasskey onChange={credentials1 => setCredentials(credentials1)}/>}

                    <div onClick={event => validateCredentials(credentials)}
                         className={"flex flex-col max-w-lg space-x-4 items-center justify-between"}>
                        <button className="btn">Login</button>
                    </div>
                </div>

                <div className={"w-full grid grid-cols-1 gap-2 lg:grid-cols-2 items-center mt-4"}>
                    <div className={"flex flex-row items-center space-x-3"}>
                        <div>
                            {methodPasskey ? "passkey" : "username | password"}
                        </div>
                        <input checked={methodPasskey} onChange={event => setMethodPasskey(event.target.checked)}
                               type="checkbox"
                               className="toggle"/>
                    </div>
                    <a className={"lg:justify-self-end"} href={"#"}>forgotten credentials?</a>
                </div>
            </div>
            <Alert initialShow={true} text={"Test message"} timeout={2_000}/>
        </>
    )
}
