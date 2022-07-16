import black from "./88248469/Logo Files/For Web/svg/Black logo - no background.svg";
import color from "./88248469/Logo Files/For Web/svg/Color logo - no background.svg"
import white from "./88248469/Logo Files/For Web/svg/White logo - no background.svg"

export function Logo(props: { variant: "black" | "color" | "white", className?: string })
{
    let src: string;

    switch (props.variant)
    {
        case "black":
            src = black;
            break;
        case "color":
            src = color;
            break;
        case "white":
            src = white;
            break;
    }

    return (
        <img className={["", props.className].join(" ")} src={src} alt={props.variant}/>
    )
}
