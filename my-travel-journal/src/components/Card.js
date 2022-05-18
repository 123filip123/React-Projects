/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <img className="card--image" src={props.imageUrl} />
            <div className="card--location-info">
                <span className="card--location">{props.location}</span>
                <span className="card--google-location">{props.googleMapsUrl}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--description">{props.description}</p>
        </div>
    )
}