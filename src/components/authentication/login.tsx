import {Logo} from "../../assets/assets";
import {useState} from "react";

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

    return (
        <>
            <div className={"max-w-screen-md mx-auto"}>
                <div className={"flex flex-col items-center space-y-3 p-3"}>
                    <Logo className={"mb-3.5"} variant={"white"}/>

                    {!methodPasskey ?
                        <MethodPassword onChange={credentials1 => setCredentials(credentials1)}/> :
                        <MethodPasskey onChange={credentials1 => setCredentials(credentials1)}/>}

                    <div className={"flex flex-col max-w-lg space-x-4 items-center justify-between"}>
                        <button className="btn">Login</button>
                    </div>
                </div>

                <div className={"w-full ml-2 grid grid-cols-1 gap-2 lg:grid-cols-2 items-center mt-4"}>
                    <div className={"flex flex-row items-center space-x-3"}>
                        <div>
                            {methodPasskey ? "passkey" : "username | password"}
                        </div>
                        <input checked={methodPasskey} onChange={event => setMethodPasskey(event.target.checked)}
                               type="checkbox"
                               className="toggle"/>
                    </div>
                    <a className={"lg:justify-self-end text-sm"} href={"#"}>forgotten credentials?</a>
                </div>
            </div>
        </>
    )
}
