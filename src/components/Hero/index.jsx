import React from "react"
import "../../utils/css/style.css"

function Hero( {
    bgPhoto , titre
}) {
    return(
        <div className="hero">
            <img className="hero__image" src={ bgPhoto } alt="header" />
            <h1 className="hero__title">{
            titre ? ' Chez vous, partout et ailleurs' : null
            }
            </h1>
        </div>
    )
}

export default Hero