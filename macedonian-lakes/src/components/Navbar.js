import React from "react"
import sonce from "../images/sonce.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img className="navbar--icon" src={sonce} />
            <div className="navbar--title">macedonian lakes.</div>
        </nav>
    )
}
