import React from "react";

export default function Result({ message }) {
    return(
        <div className="reusltmsg">
            {message && <p>{message}</p>}
        </div>
    );
}