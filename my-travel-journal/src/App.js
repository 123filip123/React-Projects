import React from "react"
import data from "./data"
import Card from "./components/Card"

export default function App(){

    const cards = data.map(item => {
        return (
            <Card {...item} />
        )
    })

    return(
        <div className="card-list">
            {cards}
        </div>
    )
    
}