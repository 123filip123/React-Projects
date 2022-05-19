import React from "react"
import data from "./data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import "./App.css"

export default function App(){

    const cards = data.map(item => {
        return (
            <Card {...item} />
        )
    })

    return(
        <div className="app">
        <Navbar />
        <div className="card-list">
            {cards}
        </div>
        
        </div>
    )
    
}