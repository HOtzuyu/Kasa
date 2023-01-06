import React from "react"
import "../../utils/css/style.css"
import image from "../../assets/background-image_home.jpg"

function Hero() {
    return(
        <div className="hero" style={{
            backgroundImage: `url(${image})` }}>
            <h1 className="hero__title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Hero