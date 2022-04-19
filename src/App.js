import React from "react";
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function App() {
    const cardData = data.map(item => {
        return (
        <Card 
            key={item.id} 
            {...item}
        />
        )
    })
    console.log(cardData)
    return (
        <div>
            <Navbar />
            <section className="main--content">
                {cardData}
            </section>
        </div>
    )
}