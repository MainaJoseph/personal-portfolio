import React from "react";
import '../App.css';

function Card ({ title, borderd, style, children}) {
    return <div className="card" style={style}>
        <h1>{title}</h1>
        {children}
    </div>
}

export default Card;