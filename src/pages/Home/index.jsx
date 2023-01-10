import React from "react"
import { Link } from "react-router-dom"

import { getLogements } from "../../Data/logements.js"

import Hero from "../../components/Hero"
import Thumb from "../../components/Thumb"

import "../../utils/css/style.css"

import Image from "../../assets/backgroundHome.jpg"


function Home() {
    return (
        <div>
            <Hero bgPhoto={ Image } titre={true} />
            <div className="gallery">
                {getLogements().map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                    <Thumb
                    cover={logement.cover}
                    title={logement.title}
                    id={logement.id}
                    />
                </Link>
                ))}
            </div>
        </div>        
    )
}

export default Home