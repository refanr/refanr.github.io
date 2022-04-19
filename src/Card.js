import React from "react";
import arrow from "./images/arrow.png"


export default function Card(props) {
    let photo = require("./images/" + props.imageUrl)
    return (
        <div className="card">
            <img src={photo} alt="" />
            <div className="card--contents">
                <div className="card--header">
                    <img src={arrow} alt="" />
                    <span className="card--country">{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}