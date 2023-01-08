import React from "react"
import "../../utils/css/style.css"
import Image from "../../assets/backgroundHome.jpg"

function Hero() {
    return(
        <div className="hero">
            <img className="hero__image" src={ Image } alt="image du header" />
            <h1 className="hero__title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Hero