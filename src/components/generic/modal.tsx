import React from "react";

export function Modal(props: { header: string; text: string; display?: boolean; onClose?: () => void })
{
    return (
        <div style={{display: props.display ? "initial" : "none"}}>
            <div className="modal-box fixed bottom-3 left-1">
                <button onClick={props.onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

                <h3 className="text-lg font-bold">{props.header}</h3>
                <p className="py-4">{props.text}</p>
            </div>
        </div>
    )
}
