/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import pin from "../images/pin.png"

export default function Card(props) {

    let badgeText;
    if (props.natural) {
        badgeText = "NATURAL"
    }
    else {
        badgeText = "ARTIFICIAL"
    }

    return (
        <div>
            <div className="card">
                <img className="card--image" src={props.imageUrl} />
                <div className="card--text-container">
                    <div className="card--location-info">
                        <img className="location-pin" src={pin} />
                        <span className="card--location">{props.location}</span>
                        <span className="card--google-location"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    </div>
                    <div className="card--title-container">
                        <h2 className="card--title"><b>{props.title}</b></h2>
                        <div className="badge">{badgeText}</div>
                    </div>

                    <p className="card--description">{props.description}</p>

                </div>


            </div>
            <hr></hr></div>
    )
}