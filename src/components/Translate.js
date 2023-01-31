import React from "react";
export const Translate = ({doStuff, setInput, response}) => {
    return (
        <div>
            <textarea
                className="text-area"
                cols={50}
                rows={20}
                onChange={(e)=>{setInput(e.target.value)}}></textarea>
            <button
                className="action-btn"
                onClick={doStuff}
                >DO YOUR STUFF</button>
            <h3
                className="result-text">
                {response.length > 0 ? response : ""}
            </h3>
        </div>
    )
}