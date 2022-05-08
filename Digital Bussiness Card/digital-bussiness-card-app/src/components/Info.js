import React from "react"
import profilePic from "../images/profilePic2.jpg"
import githubLogo from "../images/github-logo2.png"
import linkedinLogo from "../images/linkedin-logo.png"
import emailLogo from "../images/email-logo.png"

export default function Info(){
    return (
        <div className="info">
            <img className="profilePic" src={profilePic} alt="pp"/>
            <div className="name-occupation-container">
                <h1 className="nameSurname">Filip Popovski</h1>
                <h3 className="occupation">Computer Science Student</h3>
            </div>
            <div className="buttonContainer">
                <a className="githubLogoLink" href="https://github.com/123filip123/">
                    <img  className="githubImg" src={githubLogo} alt="githubIcon"/></a>
                <a className="linkedinLogoLink" href="https://www.linkedin.com/in/filip-popovski-188773215/">
                    <img  className="linkedinImg" src={linkedinLogo} alt="linkedinIcon"/></a>
                <a className="emailLogoLink" href="mailto: filippopovski1998@gmail.com">
                    <img  className="emailImg" src={emailLogo} alt="emialIcon"/></a>
            </div>

        </div>
    )
}