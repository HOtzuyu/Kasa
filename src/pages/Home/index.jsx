import React from "react"
import "../../utils/css/style.css"
import { Link } from "react-router-dom";

import Hero from "../../components/Hero"
import Thumb from "../../components/Thumb"

import { getLogements } from "../../Data/logements.js";

function Home() {
    return (
        <div>
            <Hero />
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