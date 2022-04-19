import React from "react";
import earth from "./images/earth.png"

export default function Navbar() {
    return (
        <nav>
            <img src={earth} alt="" />
            <span>my travel journal.</span>
        </nav>
    )
}